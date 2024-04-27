import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";


// LOGIN - POST
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFind = await User.findOne({ email });
        if (!userFind) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        const isMatch = await bcrypt.compare(password, userFind.password);
        if (!isMatch) {
            return res.status(400).send('Contraseña incorrecta')
        } else {
            const token = await createAccessToken({ id: userFind._id });
            res.cookie('token', token)
            res.json({
                id: userFind._id,
                username: userFind.username
            });
        }

    } catch (error) {
        res.status(400).send({ message: `${error}` })
    }
}

// LOGOUT - POST
export const logout = async (req, res) => {
    const token = req.cookies.token;
    if (token) {
        res.clearCookie('token');
        return res.send('Logout exitoso')
    }
}


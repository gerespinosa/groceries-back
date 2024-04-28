import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";


// LOGIN - POST
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email })
        if (userFound) {
            const isMatch = await bcrypt.compare(password, userFound.password)
            if (isMatch) {
                const token = await createAccessToken({ id: userFound._id })
                res.cookie("token", token);
                res.json({
                    id: userFound._id,
                    username: userFound.username
                });
            }
        } else {
            res.status(404).json({ message: "Administrador no encontrado" })
        }
    } catch (err) {
        res.status(400).json({ message: "Imposible conceder acceso" })
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


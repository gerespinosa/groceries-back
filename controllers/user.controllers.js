import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

// CREATE - REGISTER - POST
export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                email,
                password: hashedPassword
            });
            await newUser.save();
            res.status(201).json(newUser);
        }
        else {
            res.status(400).send('El usuario ya existe')
        }
    } catch (error) {
        res.status(400).send('Error al crear el usuario')
    }
}

// READ - GET
export const getUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send('Error al buscar el usuario')
    }
}

// UPDATE - PUT
export const updateUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findByIdAndUpdate(userId, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send('Error al actualizar el usuario')
    }
}

// DELETE - DELETE
export const deleteUser = async (req, res) => {
    const userId = req.params.userId;
    try {
        const user = await User.findByIdAndDelete(userId, { new: true });
        res.status(200).send('Usuario eliminado')
    } catch (error) {
        res.status(400).send('Error al borrar el usuario')
    }
}

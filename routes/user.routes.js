import { Router } from "express";
import { deleteUser, registerUser, getUser, updateUser } from "../controllers/user.controllers.js";

const router = Router();

router.post('/register', registerUser) // CREATE - REGISTER - POST

router.get('/user/:userId', getUser) // READ - GET

router.put('/user/:userId', updateUser) // UPDATE - PUT

router.delete('/user/:userId', deleteUser) // DELETE - DELETE

export default router
import { Router } from "express";
import { deleteUser, registerUser, getUser, updateUser } from "../controllers/user.controllers.js";

const router = Router();

router.post('/register', registerUser) // CREATE - REGISTER - POST

router.get('/:userId', getUser) // READ - GET

router.put('/:userId', updateUser) // UPDATE - PUT

router.delete('/:userId', deleteUser) // DELETE - DELETE

export default router
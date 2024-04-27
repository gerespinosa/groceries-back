import { Router } from "express";
import { login, logout} from "../controllers/access.controllers.js"

const router = Router()

router.post('/', login) // LOGIN - POST

router.post('/logout', logout) // LOGOUT - POST

export default router
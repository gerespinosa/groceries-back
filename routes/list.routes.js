import { Router } from "express";
import { createList, getLists, getList, updateList, deleteList } from "../controllers/list.controllers.js";

const router = Router();

router.post('/lists/new/:userId', createList) // CREATE - POST

router.get('/lists/all', getLists) // READ - GET - ALL

router.get('/lists/:listId', getList) // READ - GET - ONE

router.put('/lists/:listId', updateList) // UPDATE - PUT

router.delete('/lists/:listId', deleteList) // DELETE - DELETE

export default router
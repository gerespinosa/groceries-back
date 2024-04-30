import { Router } from "express";
import { createList, getLists, getList, updateList, deleteList, getUserLists } from "../controllers/list.controllers.js";

const router = Router();

router.post('/user/:userId/lists/new', createList) // CREATE - POST

router.get('/lists/all', getLists) // READ - GET - ALL

router.get('/user/:userId/lists', getUserLists) // READ - GET - ALL FROM USER

router.get('/user/:userId/lists/:listId', getList) // READ - GET - ONE

router.put('/user/:userId/lists/:listId', updateList) // UPDATE - PUT

router.delete('/user/:userId/lists/:listId', deleteList) // DELETE - DELETE

export default router
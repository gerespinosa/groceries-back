import { Router } from 'express'
import { createItem, getItems, getItem, updateItem, deleteItem } from '../controllers/item.controllers.js'

const router = Router()

router.post('/user/:userId/lists/:listId/items/add', createItem) // CREATE - POST

router.get('/user/:userId/lists/:listId/items', getItems) // READ - GET - ALL

router.get('/user/:userId/lists/:listId/items/:itemId', getItem) // READ - GET - ONE

router.put('/user/:userId/lists/:listId/items/:itemId', updateItem) // UPDATE - PUT

router.delete('/user/:userId/lists/:listId/items/:itemId', deleteItem) // DELETE - DELETE

export default router
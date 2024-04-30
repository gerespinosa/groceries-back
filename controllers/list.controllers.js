import List from '../models/list.model.js'
import { emailAdapter } from '../adapters/email.adapter.js'

// CREATE - POST
export const createList = async (req, res) => {
    const { name } = req.body
    const userId = req.params.userId
    // the emailAdapter function will return the email of the users
    const adaptedEmail = await emailAdapter(req, res)
    try {
        const list = new List({
            name,
            userId: userId,
            userEmail: adaptedEmail,
        })
        await list.save()
        res.status(201).json(list.name)
    } catch (error) {
        res.status(400).send('Error al crear la lista')
    }
}

// READ - GET - ALL
export const getLists = async (req, res) => {
    try {
        const lists = await List.find()
        res.status(200).send(lists)
    } catch (error) {
        res.status(400).send('Error al buscar las listas')
    }
}

// READ - GET - ONE
export const getList = async (req, res) => {
    try {
        const listFound = await List.findById(req.params.listId)
        res.status(200).send(listFound)
    } catch (error) {
        res.status(400).send('Error al buscar la lista')
    }
}

// READ - GET - ALL FROM USER
export const getUserLists = async (req, res) => {
    const userId = req.params.userId
    try {
        const lists = await List.find({ userId: userId })
        res.status(200).send([lists])
    } catch (error) {
        res.status(400).send('Error al buscar las listas del usuario')
    }
}

// UPDATE - PUT
export const updateList = async (req, res) => {
    const listId = req.params.listId
    const name = req.body
    try {
        const listFound = await List.findByIdAndUpdate(listId, req.body, { new: true })
        res.status(200).json(listFound)
    } catch (error) {
        res.status(400).send('Error al actualizar la lista')
    }
}

// DELETE - DELETE
export const deleteList = async (req, res) => {
    const listId = req.params.listId
    try {
        const list = await List.findByIdAndDelete(listId, { new: true })
        res.status(200).send('Lista eliminada')
    } catch (error) {
        res.status(400).send('Error al borrar la lista')
    }
}

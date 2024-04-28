import Item from "../models/item.model.js";
import List from "../models/list.model.js";

// CREATE - POST
export const createItem = async (req, res) => {
    const listId = req.params.listId
    const { name, quantity } = req.body
    try {
        const list = await List.findById(listId)
        if (list) {
            const item = new Item({
                name,
                quantity,
                list: listId
            })
            await item.save()
            list.items.push(item)
            await list.save()
            res.status(201).json(item)
        } else {
            res.status(400).send('La lista no existe')
        }

    } catch (error) {
        res.status(400).send('Error al crear el item')
    }
}

// READ - GET - ALL
export const getItems = async (req, res) => {
    try {
        const items = await Item.find({ list: req.params.listId })
        res.status(200).send(items)
    } catch (error) {
        res.status(400).send('Error al buscar los items')
    }
}

// READ - GET - ONE
export const getItem = async (req, res) => {
    const itemId = req.params.itemId
    try {
        const item = await Item.findById(itemId)
        res.status(200).send(item)
    } catch (error) {
        res.status(400).send('Error al buscar el item')
    }
}

// UPDATE - PUT
export const updateItem = async (req, res) => {
    const itemId = req.params.itemId;
    const { name, quantity } = req.body;
    try {
        const listFound = await List.findById(req.params.listId);
        if (listFound) {
            const item = await Item.findById(itemId);
            if (item) {
                item.name = name;
                item.quantity = quantity;
                const updatedItem = await item.save();
                listFound.items.pull(item)
                listFound.items.push(updatedItem)
                await listFound.save()
                res.status(200).send(updatedItem);
            }
        } else {
            res.status(400).send('La lista no existe');
        }
    } catch (error) {
        res.status(400).send('Error al actualizar el item');
    }
};



// DELETE - DELETE
export const deleteItem = async (req, res) => {
    const itemId = req.params.itemId
    try {
        const item = await Item.findByIdAndDelete(itemId, { new: true })
        res.status(200).send('Item eliminado')
    } catch (error) {
        res.status(400).send('Error al borrar el item')
    }
}
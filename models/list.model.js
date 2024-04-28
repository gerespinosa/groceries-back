import mongoose from 'mongoose'
import Item from './item.model.js'

const List = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userEmail: {
        type: String,
        required: true
    },
    items: [Item.schema]
}, {
    timestamps: true
})

export default mongoose.model('List', List)
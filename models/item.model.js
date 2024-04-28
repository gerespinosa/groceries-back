import mongoose from "mongoose";

const Item = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    checked: Boolean,
    list: {
        type: mongoose.Schema.Types.ObjectId,
    }
})

export default mongoose.model('Item', Item)
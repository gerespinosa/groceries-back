import mongoose from "mongoose";

const Item = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: Number,
    checked: Boolean,
    list: [String]
})

export default mongoose.model('Item', Item)
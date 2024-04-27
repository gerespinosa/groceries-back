import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()

const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {

    try {
        await mongoose.connect(`${MONGO_URL}`);
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
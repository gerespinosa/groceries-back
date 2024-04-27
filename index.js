import app from "./app.js";
import dotenv from 'dotenv'
import connectDB from "./db.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Routes
import userRoutes from './routes/user.routes.js';
import accessRoutes from './routes/access.routes.js';

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// Routes
app.use('/', userRoutes) // USER
app.use('/', accessRoutes) // ACCESS

export default app
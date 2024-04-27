import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY
export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" }, (err, token) => {
            if (err) reject(err);
            resolve(token);
        });
    });
}

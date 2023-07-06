import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { INCREDIBLY_SAFE_SECRET_KEY } from '../middlewares/const';

function generateAccessToken(user: User): string {
    return jwt.sign(user, INCREDIBLY_SAFE_SECRET_KEY, { expiresIn: '15m' });
};

export { generateAccessToken };

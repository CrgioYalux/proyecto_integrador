import jwt from 'jsonwebtoken';

import { INCREDIBLY_SAFE_SECRET_KEY } from './const';

import type { Request, Response, NextFunction } from "express";

const auth = (request: Request, response: Response, next: NextFunction): void => {
    const token = request.headers.authorization;

    if (token) {
        jwt.verify(token, INCREDIBLY_SAFE_SECRET_KEY, (err, decoded) => {
            if (err) {
                response.status(403).json({ reason: 'Wrong/expired credentials' }).end();
            } else {
                request.body.user = decoded;
                next();
            }
        });
    } else {
        response.status(401).json({ reason: 'No token provided' }).end();
    }
};

export { auth };

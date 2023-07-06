import express from 'express';
import bcrypt from 'bcrypt';

import { USER_ROUTES } from './routes';

import { pool } from '../db/connection';
import { checkIfUserExists, createUser } from '../controllers/users';

import type { User } from '../models/user';
import { generateAccessToken } from './helpers';

const loginRouter = express.Router();

// USERS ROUTES

loginRouter.post(USER_ROUTES.POST, (request, response) => {
    const newUser = request.body as User;
    if (!newUser.username || !newUser.password) {
        response.status(400).json({ reason: 'Username and/or password not provided' }).end();
        return;
    }

    pool.getConnection((error, connection) => {
        if (error) {
            response.status(500).end();
            return;
        }

        checkIfUserExists(connection, newUser)
            .then((res) => {
                if (res.exists) {
                    response.status(400).json({ reason: 'User already exists' }).end();
                    connection.release();
                    return;
                }
                createUser(connection, newUser)
                    .then((res) => {
                        if (res.created) {
                            response.status(201).end();
                            connection.release();
                            return;
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        response.status(500).end();
                    });

            })
            .catch((err) => {
                console.error(err);
                response.status(500).end();
            });

        connection.release();
    });
});

loginRouter.post(USER_ROUTES.AUTH, (request, response, next) => {
    const authUser = request.body as User;
    if (!authUser.username || !authUser.password) {
        response.status(400).json({ reason: 'Username and/or password not provided' }).end();
        return;
    }
    
    pool.getConnection((error, connection) => {
        if (error) {
            response.status(500).end();
            return;
        }
        checkIfUserExists(connection, authUser)
            .then(async (res) => {
                if (!res.exists) {
                    response.status(400).json({ reason: 'User does not exist' }).end();
                    return;
                }
                
                const storedUser = res.user;
                const matches = await bcrypt.compare(authUser.password, storedUser.hash);

                if (!matches) {
                    response.status(400).json({ reason: 'Wrong credentials' }).end();
                    return;
                }

                const accesToken = generateAccessToken(authUser);

                response.status(200).json({ accesToken }).end();
            })
    });
});

export { loginRouter };

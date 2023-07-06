import cors from 'cors';
import express from 'express';

import { auth } from '../middlewares/auth';
import { loginRouter } from '../api/loginRouter';
import { businessRouter } from '../api/businessRouter';

const createExpressApp = () => {
    const app = express();

    app.disable('x-powered-by');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    app.all('/**', (req, _, next) => {
        console.log(`
            ${req.method} ${req.url} at ${Date.now()}
        `);
        next();
    });

    app.get('/ping', (_, res) => {
        res.status(200).send('pong').end();
    });

    app.use(loginRouter);
    app.use(auth);
    app.use(businessRouter);

    app.all('/**', (_, res) => {
        res.status(404).end();
    });

    return app;
};

export { createExpressApp };

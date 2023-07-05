import cors from 'cors';
import express from 'express';
import { router } from '../api/router';

import { NOT_FOUND_PAGE } from './const';

import type { Express } from 'express';

const createExpressApp = (): Express => {
    const app = express();

    app.disable('x-powered-by');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());

    router.all('/api/**', (req, _, next) => {
        console.log(`
            ${req.method} ${req.url} at ${Date.now()}
        `);
        next();
    });

    app.use(router);

    app.get('/ping', (_, res) => {
        res.status(200).send('pong').end();
    });

    app.get('/**', (_, res) => {
        res.status(404).send(NOT_FOUND_PAGE).end();
    });

    return app;
};

export { createExpressApp };

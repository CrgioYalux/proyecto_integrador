import express from 'express';
import {
    PRODUCTS_ROUTES,
    SALES_ROUTES,
    PURCHASES_ROUTES,
    ACCOUNTS_ROUTES,
    ACCOUNTING_ENTRIES_ROUTES,
    PROVIDERS_ROUTES
} from './routes';

import { Query } from './queries';

import { pool } from '../db/connection';

import type { Product } from './utils';

const businessRouter = express.Router();

// PRODUCTS ROUTES

businessRouter.get(PRODUCTS_ROUTES.GET, (req, res, next) => {
    const productId = req.params[0];

    pool.getConnection((error, connection) => {
        if (error) {
            console.error(error);
            res.status(500).end();
        } else {

            if (productId) {
                connection.query(Query.products.getOneById, (query_error, results) => {
                    if (query_error) {
                        console.error(query_error);
                        res.status(500).end();
                    } else {
                        const product = results as Product[];
                        res.status(302).json({ product }).end();
                    }
                });
            } else {
                connection.query(Query.products.getAll, (query_error, results) => {
                    if (query_error) {
                        console.error(query_error);
                        res.status(500).end();
                    } else {
                        const products = results as Product[];
                        res.status(200).json({ products }).end();
                    }
                });
            }
        }

        connection.release();
    });
});

// SALES ROUTES

businessRouter.get(SALES_ROUTES.GET, (req, res, next) => {
    const saleId = req.params[0];
    console.log({ saleId });
    res.status(200).json({ sales: [] }).end();
});

businessRouter.post(SALES_ROUTES.POST, (req, res, next) => {
    const newSale = req.body;
    res.status(201).json({ created: newSale }).end();
});

// PURCHASES ROUTES

businessRouter.get(PURCHASES_ROUTES.GET, (req, res, next) => {
    res.status(200).json({ purchases: [] }).end();
});

businessRouter.post(PURCHASES_ROUTES.POST, (req, res, next) => {
    const newPurchase = req.body;
    res.status(201).json({ created: newPurchase }).end();
});

// ACCOUNTS ROUTES

businessRouter.get(ACCOUNTS_ROUTES.GET, (req, res, next) => {
    const accountId = req.params[0];
    console.log({ accountId });
    res.status(200).json({ accounts: [] }).end();
});

// ACCOUNTING ENTRIES ROUTES

businessRouter.get(ACCOUNTING_ENTRIES_ROUTES.GET, (req, res, next) => {
    const accountEntryId = req.params[0];
    console.log({ accountEntryId });
    res.status(200).json({ accounts_entries: [] }).end();
});

// PROVIDERS ROUTES

businessRouter.get(PROVIDERS_ROUTES.GET, (req, res, next) => {
    res.status(200).json({ providers: [] }).end();
});

export { businessRouter };

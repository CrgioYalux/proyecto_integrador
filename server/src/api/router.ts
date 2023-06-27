import express from 'express';
import {
    PRODUCTS_ROUTES,
    SALES_ROUTES,
    PURCHASES_ROUTES,
    ACCOUNTS_ROUTES,
    ACCOUNTING_ENTRIES_ROUTES,
    PROVIDERS_ROUTES,
} from './routes';

const router = express.Router();

// PRODUCTS ROUTES

router.get(PRODUCTS_ROUTES.GET, (req, res, next) => {
    const productId = req.params[0];
    console.log({ productId });
    res.status(200).json({ products: [] }).end();
});

// SALES ROUTES

router.get(SALES_ROUTES.GET, (req, res, next) => {
    const saleId = req.params[0];
    console.log({ saleId });
    res.status(200).json({ sales: [] }).end();
});

// PURCHASES ROUTES

router.get(PURCHASES_ROUTES.GET, (req, res, next) => {
    res.status(200).json({ purchases: [] }).end();
});

// ACCOUNTS ROUTES

router.get(ACCOUNTS_ROUTES.GET, (req, res, next) => {
    const accountId = req.params[0];
    console.log({ accountId });
    res.status(200).json({ accounts: [] }).end();
});

// ACCOUNTING ENTRIES ROUTES

router.get(ACCOUNTING_ENTRIES_ROUTES.GET, (req, res, next) => {
    const accountEntryId = req.params[0];
    console.log({ accountEntryId });
    res.status(200).json({ accounts_entries: [] }).end();
});

// PROVIDERS ROUTES

router.get(PROVIDERS_ROUTES.GET, (req, res, next) => {
    res.status(200).json({ providers: [] }).end();
});

export { router };

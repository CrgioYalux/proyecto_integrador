import express from 'express';
import {
    PRODUCTS_ROUTES,
    SALES_ROUTES,
    PURCHASES_ROUTES,
    ACCOUNTS_ROUTES,
    ACCOUNTING_ENTRIES_ROUTES,
    PROVIDERS_ROUTES,
    USER_ROUTES,
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

router.post(SALES_ROUTES.POST, (req, res, next) => {
    const newSale = req.body;
    res.status(201).json({ created: newSale }).end();
});

// PURCHASES ROUTES

router.get(PURCHASES_ROUTES.GET, (req, res, next) => {
    res.status(200).json({ purchases: [] }).end();
});

router.post(PURCHASES_ROUTES.POST, (req, res, next) => {
    const newPurchase = req.body;
    res.status(201).json({ created: newPurchase }).end();
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

// USERS ROUTES
//
router.post(USER_ROUTES.POST, (req, res, next) => {
    const newUser = req.body;
    res.status(201).json({ created: newUser }).end();
});

router.post(USER_ROUTES.AUTH, (req, res, next) => {
    const authUser = req.body;
    res.status(200).json({ }).end();
});

export { router };

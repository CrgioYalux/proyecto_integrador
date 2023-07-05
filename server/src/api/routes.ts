const PRODUCTS_ROUTES = {
    GET: /\/api\/products\/get\/?(\d+)?/,
};

const SALES_ROUTES = {
    GET: /\/api\/sales\/get\/?(\d+)?/,
    POST: /\/api\/sales\/post\/?/,
};

const PURCHASES_ROUTES = {
    GET: /\/api\/purchases\/get\/?/,
    POST: /\/api\/sales\/post\/?/,
};

const ACCOUNTS_ROUTES = {
    GET: /\/api\/account\/get\/?(\d+)?/,
};

const ACCOUNTING_ENTRIES_ROUTES = {
    GET: /\/api\/accounting_entries\/get\/?(\d+)?/,
};

const PROVIDERS_ROUTES = {
    GET: /\/api\/providers\/get\/?/,
};

const USER_ROUTES = {
    POST: /\/api\/users\/post\/?/,
    AUTH: /\/api\/users\/auth\/?/,
};

export {
    PRODUCTS_ROUTES,
    SALES_ROUTES,
    PURCHASES_ROUTES,
    ACCOUNTS_ROUTES,
    ACCOUNTING_ENTRIES_ROUTES,
    PROVIDERS_ROUTES,
    USER_ROUTES,
};

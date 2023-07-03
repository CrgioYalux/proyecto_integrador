type Provider = {
    id: number,
    name: string,
    cuit: string,
    address: string,
    products: Product[],
};

type Product = {
    id: number,
    name: string,
    description: string,
    unitPrice: number,
    units: number,
    // provider: Provider,
    colors: string[],
    sizes: string[],
};

type BoughtProduct = Omit<Product, 'sizes' | 'colors'> & {
    size: string,
    color: string,
};

type SoldProduct = Omit<BoughtProduct, 'provider'> & {
    brand: string,
};

type InventoryProduct = Omit<SoldProduct, 'units'> & {
    stock: number;
};


type Client = {
    id: number,
    name: string,
    surname: string,
    businessName: string,
    cuit: string,
    address: string,
};

type Sale = {
    id: number,
    amount: number,
    client: Client,
    date: Date,
    cart: SoldProduct[],
};

type Purchase = {
    id: number,
    amount: number,
    provider: Omit<Provider, 'products'>,
    dateInMs: string,
    cart: BoughtProduct[],
};

type Account = {
    id: string,
    name: string,
    balance: number,
};

enum SimpleAccountingEntrySide {
    Debit,
    Credit,
};

type SimpleAccountingEntry = {
    id: number,
    side: SimpleAccountingEntrySide,
    amount: number,
    accountName: string,
    complexAccountingEntryId: number,
};

type ComplexAccountingEntry = {
    id: number,
    date: string,
    description: string,
    simpleAccountingEntries: Omit<SimpleAccountingEntry, 'complexAccountingEntryId'>[],
};

type StandaloneMinimunCRUDOperations<T> = {
    getAll: () => T[],
    getOneById: (id: number) => T | undefined,
    post: (item: T) => boolean,
};

type DependentMinimunCRUDOperations<T> = {
    getAll: () => Promise<T[]>,
    getOneById: (id: number) => Promise<T | undefined>,
    post: (item: T) => Promise<boolean>,
};

export type { 
    Product,
    BoughtProduct,
    InventoryProduct,
    Client,
    Sale,
    Purchase,
    Account,
    SimpleAccountingEntry,
    ComplexAccountingEntry,
    Provider,
    StandaloneMinimunCRUDOperations,
    DependentMinimunCRUDOperations,
};

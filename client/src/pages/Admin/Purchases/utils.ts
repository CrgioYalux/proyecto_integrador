type ProductVariety = {
    id: number;
    name: string;
};

type Product = {
    id: number;
    name: string;
    units: number;
    unitPrice: number;
    description: string;
    sizes: string[];
    colors: string[];
};

type CartCustomProduct = Omit<Product, 'sizes' | 'colors'> & {
    size: string,
    color: string,
    brand: string,
};

type PurchasesCustomProduct = Omit<Product, 'sizes' | 'colors'> & {
    size: string,
    color: string,
};

type Provider = {
    id: number;
    name: string;
    cuit: number;
    address: string;
    products: Product[];
};

type Purchase = {
    id: number,
    provider: Omit<Provider, 'products'>,
    products: PurchasesCustomProduct[],
    dateInMs: string,
};

export type { ProductVariety, Product, CartCustomProduct, Provider, Purchase };


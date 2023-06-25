type ProductVariety = {
    id: number;
    name: string;
};

type Product = {
    id: number;
    name: string;
    stock: number;
    unitPrice: number;
    description: string;
    sizes: string[];
    colors: string[];
};

type Provider = {
    id: number;
    name: string;
    cuit: number;
    address: string;
    products: Product[];
};

export type { ProductVariety, Product, Provider };
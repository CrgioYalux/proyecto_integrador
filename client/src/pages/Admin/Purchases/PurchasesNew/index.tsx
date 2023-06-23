import './PurchasesNew.css';

import { useEffect, useState } from 'react';

import data from './data.json';

import Filter from './components/Filter';
import ListProviders from './components/ListProviders';
import ListProducts from './components/ListProducts';
import CalculatedPrice from './components/CalculatedPrice';

import type { ProductVariety, Product, Provider } from './utils';

interface PurchasesNewProps {};

const PurchasesNew: React.FC<PurchasesNewProps> = ({}) => {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [providerProducts, setProviderProducts] = useState<Product[]>([]);

    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const [productSizes, setProductSizes] = useState<ProductVariety[]>([]);
    const [productColors, setProductColors] = useState<ProductVariety[]>([]);

    const [selectedProductSize, setSelectedProductSize] = useState<ProductVariety | null>(null);
    const [selectedProductcolor, setSelectedProductColor] = useState<ProductVariety | null>(null);

    const [units, setUnits] = useState<number>(0);

    useEffect(() => {
        // this simulates the get request bringing the providers from the API
        
        setProviders(data.providers as Provider[]);
        setSelectedProvider(data.providers[0] as Provider);
        setProviderProducts(data.providers[0].products as Product[]);
    }, []);

    const selectProvider = (provider: Provider) => {
        setSelectedProvider(provider);
        setProviderProducts(provider.products);
        setSelectedProduct(null);
        setSelectedProductSize(null);
        setSelectedProductColor(null);
    };

    const selectProduct = (product: Product | null) => {
        setSelectedProduct(product);

        if (!product) {
            setSelectedProductSize(null);
            setSelectedProductColor(null);
            return;
        }

        setProductSizes(product.sizes.map((size, index) => ({ name: size, id: index })));
        setProductColors(product.colors.map((color, index) => ({ name: color, id: index })));
        setSelectedProductSize({ name: product.sizes[0], id: 0 });
        setSelectedProductColor({ name: product.colors[0], id: 0 });
    };

    return (
        <div className='PurchasesNew'>
            <div className="PurchasesNew_providers">
                <ListProviders
                providers={providers}
                selectedProvider={selectedProvider} 
                selectProvider={selectProvider} 
                >
                    <ListProducts
                    products={providerProducts}
                    selectedProduct={selectedProduct}
                    selectProduct={selectProduct}
                    />
                </ListProviders>
            </div>
            <div className="PurchasesNew_cart">
                <h1>Cart</h1>
            </div>
            <div className="PurchasesNew_filterNprice">
            {selectedProduct && <>
                <Filter
                className='PurchasesNew__Filter'
                sizes={productSizes}
                colors={productColors}
                selectedSize={selectedProductSize}
                selectedColor={selectedProductcolor}
                selectSize={setSelectedProductSize}
                selectColor={setSelectedProductColor}
                />
                <CalculatedPrice
                className='PurchasesNew__CalculatedPrice'
                units={units}
                setUnits={setUnits}
                unitPrice={selectedProduct.unitPrice}
                />
            </>}
            </div>
        </div>
   );
};

export default PurchasesNew;

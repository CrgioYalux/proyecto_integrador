import './PurchasesNew.css';

import { useEffect, useState } from 'react';

import { MAX_QUANTITY_TO_BUY } from './const';
import { useDatabase } from '../../../../providers/Database';

// import data from './data.json';

import Filter from './components/Filter';
import ListProviders from './components/ListProviders';
import ListProducts from './components/ListProducts';
import CalculatedPrice from './components/CalculatedPrice';
import Button from '../../../../components/Button';
import Cart from './components/Cart';

import type { ProductVariety, Product, CartCustomProduct, Provider } from '../utils';
import type { Purchase } from '../../../../providers/Database/utils';

interface PurchasesNewProps {};

const PurchasesNew: React.FC<PurchasesNewProps> = ({}) => {
    const [fixedProvider, setFixedProvider] = useState<boolean>(false);

    const [providers, setProviders] = useState<Provider[]>([]);
    const [providerProducts, setProviderProducts] = useState<Product[]>([]);

    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const [productSizes, setProductSizes] = useState<ProductVariety[]>([]);
    const [productColors, setProductColors] = useState<ProductVariety[]>([]);

    const [selectedProductSize, setSelectedProductSize] = useState<ProductVariety | null>(null);
    const [selectedProductcolor, setSelectedProductColor] = useState<ProductVariety | null>(null);
    const [units, setUnits] = useState<number>(0);

    const [cart, setCart] = useState<CartCustomProduct[]>([]);
    
    const database = useDatabase();

    const confirmPurchase = (): void => {
        const highestId: number = database.actions.purchases.getAll().reduce((acc, el) => acc + el.id, 1);
        if (selectedProvider && cart.length !== 0) {
            const purchase: Purchase = {
                id: highestId,
                amount: cart.reduce((acc, el) => acc + el.units * el.unitPrice, 0),
                provider: selectedProvider,
                cart,
                dateInMs: Date.now().toString(),
            };
            database.actions.purchases.post(purchase);
        }
    };

    useEffect(() => {
        // this simulates the get request bringing the providers from the API
        const providers = database.actions.providers.getAll() as Provider[];
        setProviders(providers);
        setSelectedProvider(providers[0] as Provider);
        setProviderProducts(providers[0].products as Product[]);
    }, []);

    const clearSelectedProduct = (): void => {
        setSelectedProduct(null);
        setSelectedProductSize(null);
        setSelectedProductColor(null);
    };

    const addToCart = (): void => {
        if (selectedProduct && selectedProductSize && selectedProductcolor && selectedProvider && units !== 0 && units <= MAX_QUANTITY_TO_BUY) {
            const { sizes, colors, ...rest } = selectedProduct;
            setCart((prev) => [...prev, {
                ...rest,
                size: selectedProductSize.name as string,
                color: selectedProductcolor.name as string,
                brand: selectedProvider.name,
            }]);
            setFixedProvider(true);

            clearSelectedProduct();
        }
    };

    const deleteFromCart = (id: number): void => {
        setCart(prev => prev.filter(product => product.id !== id));
    };


    const selectProvider = (provider: Provider) => {
        setSelectedProvider(provider);
        setProviderProducts(provider.products);
        clearSelectedProduct();
    };

    const selectProduct = (product: Product | null) => {
        if (!product) {
            clearSelectedProduct();
            return;
        }

        setSelectedProduct(product);
        setProductSizes(product.sizes.map((size, index) => ({ name: size, id: index })));
        setProductColors(product.colors.map((color, index) => ({ name: color, id: index })));
        setSelectedProductSize({ name: product.sizes[0], id: 0 });
        setSelectedProductColor({ name: product.colors[0], id: 0 });
    };

    return (
        <div className='PurchasesNew'>
            <div className='PurchasesNew__form'>
                {fixedProvider 
                ? <strong>{selectedProvider?.name}</strong>
                :<ListProviders
                className='PurchasesNew__section PurchasesNew-form__providers'
                providers={providers}
                selectedProvider={selectedProvider} 
                selectProvider={selectProvider} 
                />}
                <div className='PurchasesNew__section PurchasesNew-form__products'>
                    <ListProducts
                    products={providerProducts}
                    selectedProduct={selectedProduct}
                    selectProduct={selectProduct}
                    />
                </div>
                <div className='PurchasesNew__section PurchasesNew-form__filter-n-price'>
                    {selectedProduct 
                        ? <>
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
                            >
                                <Button 
                                className='PurchasesNew__add-button'
                                onClick={addToCart}
                                disabled={!selectedProduct || !selectedProductSize || !selectedProductcolor || !selectedProvider || units === 0 || units > MAX_QUANTITY_TO_BUY}
                                >Add</Button>
                            </CalculatedPrice>
                        </>
                        : <span>Select a product</span>}
                </div>
            </div>
            <div className='PurchasesNew__section PurchasesNew__cart'>
                {!cart.length 
                    ? <span>Add products</span>
                    : <Cart products={cart} deleteFromCart={deleteFromCart} confirmPurchase={confirmPurchase} />}
            </div>
        </div>
   );
};

export default PurchasesNew;

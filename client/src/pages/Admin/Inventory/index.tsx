import './Inventory.css';

import { useState, useEffect } from 'react';

import SearchIcon from '../../../components/Icons/Search';

import data from './data.json';

import type { InventoryProduct } from '../../../providers/Database/utils';

interface InventoryProps { };

const WARNING_THRESHOLD: number = 10;

const Inventory: React.FC<InventoryProps> = () => {
    const [products, setProducts] = useState<InventoryProduct[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        setProducts(data.products as InventoryProduct[]);
    }, []);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchQuery(() => value.replace(/[^a-zA-Z0-9-\s]/g, ''));
    };

    const filteredList = products.filter((product) => {
        if (!searchQuery.length) return true;

        const id = Number(searchQuery);
        if (isNaN(id)) {
            const regExp = new RegExp(`^${searchQuery.toLowerCase()}.*`);
            return !!product.name.toLowerCase().match(regExp) || !!product.brand.toLowerCase().match(regExp);
        }
        
        return product.id === id;
    });

    return (
        <div className='Inventory'>
            <h1 className='Inventory__title'>Inventory</h1>
            <div className='Inventory__content'>
                <label className='Inventory__filter' htmlFor='inventory_filter_search'>
                    <input
                    className='Inventory-filter__input'
                    type='text'
                    id='inventory_filter_search'
                    name='inventory_filter_search'
                    placeholder='e.g. product name, id or brand'
                    value={searchQuery}
                    onChange={handleOnChange}
                    />
                    <SearchIcon className='Inventory-filter__icon' />
                </label>
                <div className='Inventory__list'>
                    <div className='Inventory-list__item Inventory-list__header'>
                        <span title='Product ID'>ID</span>
                        <span title='Product brand'>Brand</span>
                        <span title='Product name'>Name</span>
                        <span title='Product stock'>Stock</span>
                        <span title='Product unit price'>Unit Price</span>
                    </div>
                    {filteredList.map((product) => (
                        <div
                        key={product.id}
                        className={`Inventory-list__item 
                                    ${product.stock === 0 
                                        ? '--no-stock' 
                                        : product.stock < WARNING_THRESHOLD
                                            ? '--below-warning-threshold'
                                            : '--above-warning-threshold'}`}
                        >
                            <span title={product.id.toString()}>{product.id}</span>
                            <span title={product.brand.toString()}>{product.brand}</span>
                            <span title={product.name.toString()}>{product.name}</span>
                            <span title={product.stock.toString()}>{product.stock}</span>
                            <span title={product.unitPrice.toString()}>{product.unitPrice}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Inventory;

import './Inventory.css';

import { useState, useEffect } from 'react';

import SearchIcon from '../../../components/Icons/Search';

import data from './data.json';
import { InventoryProduct } from '../../../providers/Database/utils';


interface InventoryProps { };

const Inventory: React.FC<InventoryProps> = () => {
    const [products, setProducts] = useState<InventoryProduct[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
        setProducts(data.products as InventoryProduct[]);
    }, []);

    const filteredList = products.filter((product) => {
        const regExp = new RegExp(`.*${searchQuery}.*`);
        return !product.name.match(regExp);
    });

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    return (
        <div className='Inventory'>
            <h1 className='Inventory__title'>Inventario</h1>
            <label className='Inventory__filter' htmlFor='inventory_filter_search'>
                <SearchIcon className='' />
                <input
                type='text'
                id='inventory_filter_search'
                name='inventory_filter_search'
                placeholder='e.g. t-shirt'
                value={input}
                onChange={handleOnChange}
                />
            </label>
            <div className='Inventory__content'>
                {filteredList.map((product) => (
                    <div key={product.id}>
                        <span>{product.id}</span>
                        <span>{product.brand}</span>
                        <span>{product.name}</span>
                        <span>{product.stock}</span>
                        <span>{product.unitPrice}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Inventory;

import './Item.css';

import type { Product } from '../../../utils'; 

interface ItemProps {
    isSelected: Boolean;
    product: Product;
};

const Item: React.FC<ItemProps> = ({ product, isSelected }) => {

    return (
        <div className={`Item ${isSelected ? "--selected" : ""}`}>
            <span className='Item__span Item-span__name'>
            {product.name}
            </span>
            <span className='Item__span Item-span__price'>
            ${product.unitPrice}
            </span>
            <span className='Item__span Item-span__name'>
            {product.description}
            </span>
        </div>
    );
};

export default Item;

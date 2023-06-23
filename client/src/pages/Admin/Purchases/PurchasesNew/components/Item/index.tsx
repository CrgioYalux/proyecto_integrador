import './Item.css';

import type { Product } from '../../utils'; 

interface ItemProps {
    isSelected: Boolean;
    product: Product;
};

const Item: React.FC<ItemProps> = ({ product, isSelected }) => {

    return (
        <div className={`Item ${isSelected ? "--selected" : ""}`}>
            <span className='Item_span'>
            {product.name}
            </span>
            <span className='Item_span Item_span-middle'>
            ${product.unitPrice}
            </span>
            <span className='Item_span'>
            {product.description}
            </span>
        </div>
    );
};

export default Item;

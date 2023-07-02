import './Cart.css';

import { useNavigate } from 'react-router-dom';

import XMark from '../../../../../../components/Icons/XMark';
import Button from '../../../../../../components/Button';

import type { CartCustomProduct } from "../../../utils";

interface CartProps {
    className?: string;

    products: CartCustomProduct[];

    deleteFromCart: (id: number) => void;
    confirmPurchase: () => void;
};

const Cart: React.FC<CartProps> = ({
    className = '',
    products,
    deleteFromCart,
    confirmPurchase,
}) => {
    const navigate = useNavigate();

    const total = products.reduce((acc, curr) => acc + curr.unitPrice * curr.units, 0).toFixed(2);

    return (
        <div className={`Cart ${className}`}>
            <strong>Cart</strong>
            <div className='Cart__list'>
                {products.map((product) => (
                    <div key={product.id} className='Cart-list__item'>
                        <div className='Cart-list-item__content'>
                            <span className='Cart-list-item-content__brand' title={product.name}>{product.brand}</span>
                            <span className='Cart-list-item-content__name' title={product.name}>{product.name}</span>
                            <span className='Cart-list-item-content__stock-n-price'>{product.units} x ${product.unitPrice}</span>
                        </div>
                        <button className='Cart-list-item__delete-bt' onClick={() => deleteFromCart(product.id)}>
                            <XMark className='Cart-list-item-delete-bt__icon' />
                        </button>
                    </div>
                ))}
            </div>
            <strong className='Cart__total'>Total ${total}</strong>
            <Button onClick={() => {
                alert('Purchased sucessfully');
                confirmPurchase();
                navigate('/admin/purchases');
            }}>Confirm</Button>
        </div>
    );
};

export default Cart;

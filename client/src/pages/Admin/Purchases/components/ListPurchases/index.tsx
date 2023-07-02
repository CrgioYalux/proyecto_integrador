import './ListPurchases.css';

import { useState } from 'react';

import RadioListInput from "../../../../../components/RadioListInput";
import Expand from "../../../../../components/Icons/Expand";
import Compress from "../../../../../components/Icons/Compress";

// import type { Purchase } from "../../utils";
import type { Purchase } from '../../../../../providers/Database/utils';

interface ListPurchasesProps {
    className?: string;

    purchases: Purchase[];
};

const ListPurchases: React.FC<ListPurchasesProps> = ({
    className = '',
    purchases,
}) => {
    return (
        <RadioListInput
        className={`ListPurchases ${className}`}
        list={purchases}
        htmlFor='purchases'
        select={() => {}}
        selected={null}
        RenderAs={(item) => {
            const [expanded, setExpanded] = useState<boolean>(false);
            const purchase = item as Purchase;
            const purchasedDate = new Date(Number(purchase.dateInMs));

            return (
                <div className='ListPurchases__item' key={purchase.id}>
                    <div className='ListPurchases-item__compressed-view'>
                        <div className='ListPurchases-item__content'>
                            <span className='ListPurchases-item__info'>
                                FROM: <strong>{purchase.provider.name}</strong>
                            </span>
                            <span className='ListPurchases-item__info'>
                                PURCHASED PRODUCTS: <strong>{purchase.cart.reduce((acc, el) => acc + el.units, 0)}</strong>
                            </span>
                            <span className='ListPurchases-item__info'>
                                AMOUNT PAID: ${purchase.amount.toFixed(2)}
                            </span>
                            <span className='ListPurchases-item__info'>
                                DATE: <strong>{purchasedDate.toLocaleString()}</strong>
                            </span>
                        </div>
                        <button onClick={() => setExpanded((prev) => !prev)}>
                            {expanded ? <Compress className='ListPurchases-item__expand-bt' /> : <Expand className='ListPurchases-item__expand-bt' />}
                        </button>
                    </div>
                    {expanded && <div className='ListPurchases-item__expanded-view'>
                        <strong>Detail:</strong>
                        {purchase.cart.map((product) => (
                            <span>- {product.name} ({product.size}, {product.color}) x {product.units} units</span>
                        ))}
                    </div>}
                </div>
            );
        }}
        />
    );
};

export default ListPurchases;

import './Purchases.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDatabase } from '../../../providers/Database';

// import data from './data.json';

import Button from '../../../components/Button';
import ListPurchases from './components/ListPurchases';

// import type { Purchase } from './utils';
import type { Purchase } from '../../../providers/Database/utils';

interface PurchasesProps {};

const Purchases :React.FC<PurchasesProps> = ({}) => {
    const database = useDatabase();

    const [purchases, setPurchases] = useState<Purchase[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        // setPurchases(data.purchases as Purchase[]);
        setPurchases(database.actions.purchases.getAll());
    }, []);

    return (
        <div className='Purchases'>
            <div className='Purchases__content'>
                <ListPurchases purchases={purchases} />
            </div>
            <Button className='Purchase__new-bt' onClick={() => navigate('/admin/purchases/new')}>New</Button>
        </div>
    );
};
export default Purchases;

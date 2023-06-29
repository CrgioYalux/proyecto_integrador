import './Purchases.css';

import { useState, useEffect } from 'react';

import data from './data.json';

import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';
import RadioListInput from '../../../components/RadioListInput';

import type { Purchase } from './utils';

interface PurchasesProps {};

const Purchases :React.FC<PurchasesProps> = ({}) => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [selected, setSelected] = useState<Purchase | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        setPurchases(data.purchases as Purchase[]);
    }, []);

    return (
        <div className='Purchases'>
            <RadioListInput list={[]} htmlFor='purchases' select={} selected={} />
            <Button onClick={() => navigate('/admin/purchases/new')}></Button>
        </div>
   );
};
export default Purchases;

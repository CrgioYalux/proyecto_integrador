import './Purchases.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

interface PurchasesProps {};

const Purchases :React.FC<PurchasesProps>= ({})=>{
    const navigate = useNavigate();
    return(
        <div className='Purchases'>
            <Button onClick={() => navigate('/admin/purchases/new')}></Button>
        </div>
   );
};
export default Purchases;

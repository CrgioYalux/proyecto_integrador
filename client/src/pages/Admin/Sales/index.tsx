import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';


interface SalesProps{

}


const Sales :React.FC<SalesProps>= ({})=>{
    const navigate = useNavigate();
    return(
        <div className='Sales'>
            <Button onClick={() => navigate('/admin/sales/new')}>NEW SALE</Button>
        </div>
   );
};
export default Sales;
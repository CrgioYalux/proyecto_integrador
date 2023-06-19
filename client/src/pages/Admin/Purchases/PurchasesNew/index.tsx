import './PurchasesNew.css';
import Providers from './components/Providers';
import ClothingFilter from '../components/ClothingFilter';
interface PurchasesNewProps{

}


const PurchasesNew :React.FC<PurchasesNewProps>= ({})=>{
    return(
        <div className='PurchasesNew'>
            <Providers />
        </div>
   );
};
export default PurchasesNew;
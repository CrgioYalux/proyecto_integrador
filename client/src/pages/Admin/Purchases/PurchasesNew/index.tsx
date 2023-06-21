import './PurchasesNew.css';
import Providers from './components/Providers';
interface PurchasesNewProps{

}


const PurchasesNew :React.FC<PurchasesNewProps>= ({})=>{
    return(
        <div className='PurchasesNew'>
            <h1>New purchase to providers </h1>
            <div className="PurchasesNew_providers">
                <Providers selectedProviderId={1}/>
            </div>
            <div className="PurchasesNew_cart">
            </div>
            <div className="PurchasesNew_filter">
            </div>
        </div>
   );
};
export default PurchasesNew;
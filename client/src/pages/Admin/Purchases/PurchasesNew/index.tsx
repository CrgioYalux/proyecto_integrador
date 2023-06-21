import './PurchasesNew.css';
import Providers from './components/Providers';
interface PurchasesNewProps{

}


const PurchasesNew :React.FC<PurchasesNewProps>= ({})=>{
    return(
        <div className='PurchasesNew'>
            <h1>New purchases</h1>
            <div className="PurchasesNew_providers">
                <Providers selectedProviderId={1}/>
            </div>
            <div className="PurchasesNew_cart">
                <h1>hola1</h1>
            </div>
            <div className="PurchasesNew_filter">
            <h1>hola2</h1>
            </div>
        </div>
   );
};
export default PurchasesNew;
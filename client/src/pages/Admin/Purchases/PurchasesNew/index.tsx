import './PurchasesNew.css';
import {useState} from 'react';
import Providers from './components/Providers';
interface PurchasesNewProps{

}
type Product = {
    id:number,
    name:string,
    stock:number,
    unitPrice:number,
    description:string,
    size:Array<string>,
    color:Array<string>
};

const PurchasesNew :React.FC<PurchasesNewProps>= ({})=>{
    const [selectedProduct, setSelectedProduct] = useState<Product|null>(null);
    return(
        <div className='PurchasesNew'>
            <h1>New purchases</h1>
            <div className="PurchasesNew_providers">
                <Providers selectedProduct={selectedProduct} selectProduct={(product)=>setSelectedProduct(product)}/>
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
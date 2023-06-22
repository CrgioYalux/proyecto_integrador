import './PurchasesNew.css';
import {useState} from 'react';
import Providers from './components/Providers';
import Filter from './components/Filter';
interface PurchasesNewProps{}
type Product = {
    id:number,
    name:string,
    stock:number,
    unitPrice:number,
    description:string,
    size:Array<string>,
    color:Array<string>
};
type  Provider = {
    id: number;
    name: string;
    cuit: number;
    address: string;
    products: Array<Product>
};

const PurchasesNew :React.FC<PurchasesNewProps>= ({})=>{
    const [selectedProduct, setSelectedProduct] = useState<Product|null>(null);
    const [selectedProvider, setSelectedProvider] = useState<Provider|null>(null);
   
    return(
        <div className='PurchasesNew'>
            <h1>New purchases</h1>
            <div className="PurchasesNew_providers">
                <Providers 
                selectProvider={(provider)=>setSelectedProvider(provider)} 
                selectedProvider={selectedProvider} 
                selectedProduct={selectedProduct}  
                selectProduct={(product)=>setSelectedProduct(product)}
                />
            </div>
            <div className="PurchasesNew_cart">
                <h1>hola1</h1>
            </div>
            <div className="PurchasesNew_filterNprice">
                <Filter selectedProduct={selectedProduct} />
            </div>
        </div>
   );
};
export default PurchasesNew;
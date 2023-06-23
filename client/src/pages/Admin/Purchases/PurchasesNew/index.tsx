import './PurchasesNew.css';
import {useEffect, useState} from 'react';
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
    const [sizeValue, setSizeValue]= useState<number>(-1);
    const [colorValue, setColorValue]= useState<number>(-1);
    const [unitPrice, setUnitPrice]= useState<number|null>(null);
    const [totalPrice, setTotalPrice]= useState<number|null>(null);

    useEffect(()=>{
        
        setSizeValue(-1)
        setColorValue(-1)

    }, [selectedProduct, selectedProvider])
    return(
        <div className='PurchasesNew'>
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
                <Filter 
                selectedProduct={selectedProduct} 
                setColorValue={(cValue)=>setColorValue(cValue)} 
                colorValue={colorValue} 
                setSizeValue={(sValue)=>setSizeValue(sValue)} 
                sizeValue={sizeValue}
                setTotalPrice={(tPrice)=>setTotalPrice(tPrice)}
                totalPrice={totalPrice}
                setUnitPrice={(uPrice)=>setUnitPrice(uPrice)}
                unitPrice={unitPrice}
                />

                
            </div>
        </div>
   );
};
export default PurchasesNew;
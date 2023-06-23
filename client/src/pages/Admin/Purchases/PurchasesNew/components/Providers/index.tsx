import './Providers.css';
import {useState} from 'react';
import data from './data.json';
import Item from '../Item';
interface ProvidersProps{
    selectedProduct:Product|null;
    selectProduct:(product:Product|null)=> void;
    selectedProvider:(Provider|null);
    selectProvider:(provider:Provider|null)=> void;
}
type  Provider = {
    id: number;
    name: string;
    cuit: number;
    address: string;
    products:Array<Product>;
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
const Providers: React.FC<ProvidersProps>= ({selectedProduct, selectProduct, selectProvider})=>{
    
    const handleSelecProduct = (product:Product)=>{
        selectProduct(product)
    };
    const handleOnClick = ()=> {
        selectProduct(null)
    };
    
    const [selectedProviderId, setSelectedProviderId] = useState<number>(1)
    
    const handleOnChange = (e:React.SyntheticEvent)=> {
        selectProduct(null)
        const selectElement = e.target as HTMLSelectElement;
        setSelectedProviderId(Number(selectElement.value)+1)
        const {products, ...providerWoP} = data.providers[Number(selectElement.value)]
        const providers1 = providerWoP as Provider;
        selectProvider({...providers1,products:[]})
    }
    
    
    return(
        <div className="Providers">
            <select name='provider_select' onChange={handleOnChange}>
                {data.providers.map((provider, index) =>{
                    return (
                        <option
                        value={index}
                        >
                            {provider.name}
                        </option>
                    );
                })}
            </select>
            {data.providers.map(provider =>{
                
                if(provider.id === selectedProviderId){
                    return(
                        <div key={provider.id} className='Providers_provider'>           
                            <p>PROVEEDOR: {` ${provider.name}`}</p>

                            {provider.products.map(product =>{
                                return(
                                    <label key={product.id} className='Providers_product_label' htmlFor={`item${product.id}`} >
                                        <input 
                                        key={product.id}
                                        type='radio'
                                        name='product'
                                        id={`item${product.id}`}
                                        onChange={()=>handleSelecProduct(product)}
                                        onClick={handleOnClick}
                                        checked={product.id === selectedProduct?.id}
                                        style={{display:"none"}}
                                        />
                                        <Item product={product} isSelected={product.id === selectedProduct?.id}/>
                                    </label>
                                )
                            })}

                        </div>
                )
                }
                
            })}
        </div>
   );
};
export default Providers;

import './Providers.css';
import {useState} from 'react';
import data from './data.json';
import Item from '../Item';
interface ProvidersProps{
    selectedProduct:Product|null;
    selectProduct:(product:Product|null)=>void;
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
const Providers: React.FC<ProvidersProps>= ({selectedProduct, selectProduct})=>{
    
    
    const handleSelecProduct = (product:Product)=>{
        selectProduct(product)
    };
    const handleOnClick = ()=> {
        selectProduct(null)
    }
    const [selectedProviderId, setSelectedProviderId] = useState<number>(1)
    const handleOnChange = (e:React.SyntheticEvent)=> {
        const selectElement = e.target as HTMLSelectElement;
        setSelectedProviderId(Number(selectElement.value))
    }
    
    return(
        <div className="Providers">
            <select name='provider_select' onChange={handleOnChange}>
                {data.providers.map(provider =>{
                    return (
                        <option 
                        value={provider.id}
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

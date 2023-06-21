import './Providers.css';
import {useState} from 'react';
import data from './data.json';
import Item from '../Item';
interface ProvidersProps{
    selectedProviderId:number;
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



const Providers: React.FC<ProvidersProps>= ({selectedProviderId})=>{
    
    const [selectedProduct, setSelectedProduct] = useState<Product|null>(null);
    const handleSelecProduct = (product:Product)=>{
        setSelectedProduct(product)
    };
    const handleOnClick = ()=>{
        setSelectedProduct(null)
    }
    return(
        <div className="Providers">
            {data.providers.map(provider =>{
                if(provider.id === selectedProviderId){
                    return(
                        <div key={provider.id} className='Providers_provider'>           
                            <p>PROVEEDOR: {` ${provider.name}`}</p>

                            {provider.products.map(product =>{
                                return(
                                    <label className='Providers_product_label' htmlFor={`item${product.id}`} >
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
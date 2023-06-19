import './Providers.css';
import {useState} from 'react';
import data from './data.json';
import Item from '../Item';
interface ProvidersProps{

}
type Product = {
    id:number,
    name:string,
    stock:number,
    unitPrice:number,
    description:string,
    size:string,
    color:string
};



const Providers: React.FC<ProvidersProps>= ({})=>{
    return(
        <div className='Providers'>
            {data.providers.map(provider =>{
                return(
                    <div key={provider.id}>
                        <p>{provider.name}</p>
                        
                        {provider.products.map(product =>{
                            const [selectedProduct, setSelectedProduct] = useState<Product|null>(null)
                            
                             return(
                                <div>
                                    <Item selectProviderProduct={(product)=>{setSelectedProduct(product)}} children={product.name}/>
                                    <p>{selectedProduct?.id}</p>
                                </div>
                            )
                        })}

                    </div>
                )
            })}
        </div>
   );
};
export default Providers;
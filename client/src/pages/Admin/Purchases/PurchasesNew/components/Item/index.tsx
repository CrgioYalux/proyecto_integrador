import {useState} from 'react';
import './Item.css';
interface ItemProps{
    children:React.ReactNode;
    selectProviderProduct:(product:Product)=>void;
};
type Product = {
    id:number,
    name:string,
    stock:number,
    unitPrice:number,
    description:string,
    size:string,
    color:string
};
const Item: React.FC <ItemProps>=({children, selectProviderProduct})=>{
    const [isSelected, setIsSelected] = useState(false)
    const handleOnClick = ()=>{
        setIsSelected(prev=>!prev);
    } 
    return isSelected
    ?<li className="selected" onClick={handleOnClick}>{children}</li>
    :<li onClick={handleOnClick}>{children}</li>
};

export default Item;
import './Item.css';
interface ItemProps{
    isSelected: Boolean;
    product: Product;
};
type Product = {
    id:number,
    name:string,
    stock:number,
    unitPrice:number,
    description:string,
    size: Array<string>,
    color:Array<string>
};
const Item: React.FC <ItemProps>=({product, isSelected})=>{

    return (
        <div className={ `Item ${isSelected ? "--selected" : ""}`}>
          <span className='Item_span'>
          {product.name}
          </span>
          <span className='Item_span Item_span-middle'>
          ${product.unitPrice}
          </span>
          <span className='Item_span'>
          {product.description}
          </span>
          
        </div>
    );
};

export default Item;
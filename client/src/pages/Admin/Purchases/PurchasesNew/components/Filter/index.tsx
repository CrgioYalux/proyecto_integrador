import './Filter.css';


interface FilterNpriceProps {
    selectedProduct: Product|null; 
    sizeValue: number;
    setSizeValue: ((sizeValue:number)=>void);
    colorValue:number;
    setColorValue: ((colorValue:number)=>void);
    totalPrice: number|null;
    setTotalPrice: ((totalPrice:number|null)=>void)
    unitPrice: number|null;
    setUnitPrice: ((unitPrice:number|null)=>void)
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

const FilterNprice:React.FC<FilterNpriceProps> = ({selectedProduct, setColorValue, colorValue, setSizeValue, sizeValue, unitPrice, setUnitPrice, totalPrice, setTotalPrice})=>{
    const sizeArray = selectedProduct?.size;
    const colorArray = selectedProduct?.color;
 

    const selectSize = ((sizeIndex:number)=>{
        setSizeValue(sizeIndex)
    })

    const selectColor = ((colorIndex:number)=>{
        setColorValue(colorIndex)
    })
    return(
        <div className='Filter'>
            <div className="Filter_size">
                <h1 >Size</h1>
                {sizeArray?.map((s, i)=>{
                    return (
                        <label htmlFor={`size${i+1}`} id={`size${i}`} className='Filter_label'>                                                     
                            <input
                            key={`size${i+1}`} 
                            type='radio'
                            id={`size${i+1}`}  
                            className='Filter_radio'
                            name='size'
                            onChange={()=>selectSize(i)}
                            checked={i === sizeValue}                  
                            />  
                            <span>{s}</span>
                        </label>
                    )
                })}
            </div>
            <div className="Filter_color">
                <h1>Color</h1>
                {colorArray?.map((c, i)=>{
                    return (
                        <label htmlFor={`color${i+1}`} id={`color${i}`} className='Filter_label'>
                            <input
                            key={`color${i+1}`}
                            type='radio'
                            id={`color${i+1}`}
                            className='Filter_radio'
                            name='color'
                            onChange={()=>selectColor(i)}  
                            checked={i === colorValue}                   
                            />
                            <span>{c}</span>
                        </label>
                    )
                })}
            </div>
            <div className="Filter_price">
                <div className="Filter_input-price">
                    <label htmlFor="amount">amount:</label>
                    <input
                    type="text" 
                    id='amount' 
                    // onChange={}
                    />
                </div>
                <span>total price: {} </span>
            </div>
        </div>
    )
}

export default FilterNprice;
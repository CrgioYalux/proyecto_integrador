import './Filter.css';


interface FilterNpriceProps {
    selectedProduct:Product|null; 
    sizeValue:number;
    colorValue:number;
    setSizeValue:((sizeValue:number)=>void);
    setColorValue:((colorValue:number)=>void);
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

const FilterNprice:React.FC<FilterNpriceProps> = ({selectedProduct, setColorValue, colorValue, setSizeValue, sizeValue})=>{
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
            <div className="price"></div>
        </div>
    )
}

export default FilterNprice;
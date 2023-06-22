import './Filter.css';
import {useState} from 'react';

interface FilterNpriceProps {
    selectedProduct:Product|null;   
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

const FilterNprice:React.FC<FilterNpriceProps> = ({selectedProduct})=>{
    const sizeArray = selectedProduct?.size;
    const colorArray = selectedProduct?.color;
    const [sizeValue, setSizeValue]= useState<number|null>(null);
    const [colorValue, setColorValue]= useState<number|null>(null);

    const selectSize = ((sizeIndex:number)=>{
        setSizeValue(sizeIndex)
    })

    const selectColor = ((colorIndex:number)=>{
        setColorValue(colorIndex)
    })
    return(
        <div className='Filter'>
            <div className="Filter_sc">
                <h1>Size</h1>
                {sizeArray?.map((s, i)=>{

                    return (
                        <>
                        <input
                        type='radio'
                        key={`size${i+1}`}
                        className='Filter_radio'
                        name='size'
                        onChange={()=>selectSize(i)}                  
                        />
                        <label htmlFor={`size${i+1}`}>{s}</label>
                        </>
                    )
                })}
            </div>
            <div className="Filter_sc">
                <h1>Color</h1>
                {colorArray?.map((c, i)=>{
                    return (
                        <>
                            <input
                            key={`color${i}`}
                            type='radio'
                            id={`color${i}`}
                            className='Filter_radio'
                            name='color'
                            onChange={()=>selectColor(i)}
               
                            />
                            <label htmlFor={`color${i}`} id={`color${i}`}>{c}</label>
                        </>
                    )
                })}
            </div>
            <div className="price"></div>
        </div>
    )
}

export default FilterNprice;
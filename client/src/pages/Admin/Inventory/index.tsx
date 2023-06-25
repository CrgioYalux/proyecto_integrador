import './Inventory.css';

import data from './tests.json';
import {useState} from 'react';

function Inventory() {

    const [input, setInput] = useState<string>('');
    const filteredList = data.clothes.filter(clothe => clothe.type.includes(input))

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    return (
        <>
        <div className='Title'>
            <h1>Inventario</h1>
        </div>
        <div className='Search-box'>
            <input type='text' onChange={handleOnChange} placeholder='Buscar en inventario' value={input}/>
        </div>
        <div className='Table'>
            {
            filteredList.map(clothe => {
            return(
            <>
                <span 
                className={
                    clothe.amount === 0 ? 'Item-span-no-stock' : 
                    (clothe.amount < 10 ? 'Item-span-little-stock' : 'Item-span')
                    }>{clothe.id}</span>
                <span className={
                    clothe.amount === 0 ? 'Item-span-no-stock' : 
                    (clothe.amount < 10 ? 'Item-span-little-stock' : 'Item-span')
                    }>{clothe.type}</span>
                <span className=
                {clothe.amount === 0 ? 'Item-span-no-stock' : 
                (clothe.amount < 10 ? 'Item-span-little-stock' : 'Item-span')
                }>{clothe.price}</span>
                <span className={
                    clothe.amount === 0 ? 'Item-span-no-stock' : 
                (clothe.amount < 10 ? 'Item-span-little-stock' : 'Item-span')
                }>{clothe.colour}</span>
                <span className={
                    clothe.amount === 0 ? 'Item-span-no-stock' : 
                    (clothe.amount < 10 ? 'Item-span-little-stock' : 'Item-span')
                    }>{clothe.size}</span>
                <span className={
                    clothe.amount === 0 ? 'Item-span-no-stock' : 
                    (clothe.amount < 10 ? 'Item-span-little-stock' : 'Item-span')
                    }>{clothe.amount}</span>
                <br />
            </>
            )
        })
            }
        </div>
        </>
        
    )
}
/*
<div className='Table'>
{
    data.clothes.map(clothe => {
        return(
            <>
            
            <span className='Item-span'>{clothe.id}</span>
            <span className='Item-span'>{clothe.type}</span>
            <span className='Item-span'>{clothe.price}</span>
            <span className='Item-span'>{clothe.colour}</span>
            <span className='Item-span'>{clothe.size}</span>
            <span className='Item-span'>{clothe.amount}</span>
            <br />
            </>
        )
    })
}
*/


/*
    function handleOnClick() {
    const filtered = data.clothes.filter(
        clothe => clothe.type === input
        )
        filtered.map(clothe => {
            return(
                <>
                <span>{clothe.id}</span>
                </>
            )
        })
    }


onClick={handleOnClick}
*/

export default Inventory;
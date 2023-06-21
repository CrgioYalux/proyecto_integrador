import './Inventory.css'

import Button from '../../../components/Button';
//import { Navigate } from 'react-router-dom';
//import Button from '../../../components/Button';

function Inventory() {

    return (
        <>
        <div className='Title'>
            <h1>Inventario</h1>
        </div>
        <div className='Button-back'>
            <button>{<Button className='Button' children='Volver'/>}</button>
        </div>
        <div className='Search-box'>
            <input type="text" placeholder='Buscar en inventario'/>
            <button type='submit'>Buscar</button>
        </div>
        <div>
            <table>
                <tr>
                    <td>000</td>
                    <td>tshirt</td>
                    <td>$100</td>
                    <td>pink</td>
                    <td>xl</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        </>
        
    )
}

export default Inventory;
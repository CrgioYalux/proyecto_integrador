import './SalesNew.css'
import {useState} from 'react';
import BtnModal from '../../../../components/Modal';
import DropDown from '../../../../components/DropDown';


interface SalesNewProps {
};
const options = ["Efectivo", "Transferencia", "cuenta Corriente","Tarjeta de Credito"]
const SalesNew: React.FC<SalesNewProps> = ({ }) => {

    const[typeBill, setTypeBill] = useState<'A' | 'B'>("B");

    const handleChange = (event:React.SyntheticEvent) =>{
        
        const selectElement = event.target as HTMLSelectElement;

        setTypeBill(selectElement.value as "A" | "B")
    }
    const[selected, setSelected] = useState('')
    

    return (
        
        <div className="main__container">
            <div className="sales__new__data">
                <div className="salesnew__section sales__new__inventory">

                </div>
                <div className="salesnew__section sales__new__table">

                </div>
                <div className="salesnew__section sales__new__products">

                </div>
            </div>   
            <div className="salesnew__section cart">
            <form className="FormContainer" onSubmit={event=> event.preventDefault()}>
                
               
                <div className="containerVender">    
                    <BtnModal nameBtn = "Cerrar" btnModalName = "Ventas" className='modalContent'>

                            <select onChange={handleChange} className='containerBill'>
                                <option value="A" defaultChecked = {typeBill === "A"}>A</option>
                                <option value="B" defaultChecked = {typeBill === "B"}>B</option>
                            </select>

                            <span>Factura {typeBill}</span>
                            <div className="containerInputModal">
                                    <h2>Cliente</h2>
                                    <div className="line"></div>
                                    <label htmlFor="apellido__nombre" className='TextLabel'>Apellido y Nombre</label>
                                        <input type="text" className='Inputs' id='apellido__nombre' name='ape__nom' />
                                    <label htmlFor="cuit" className='TextLabel'>CUIT</label>
                                        <input type="text" className='Inputs' id='cuit' name='ncuit' />
                                    <label htmlFor="direccion" className='TextLabel'>Direccion</label>
                                        <input type="text" className='Inputs' id='direccion' name='ndireccion' />
                                    <label htmlFor="fecha" className='TextLabel'>Fecha</label>
                                        <input type="date" className='Inputs' id='fecha' name='nfecha' />
                                    <label htmlFor="pago__metodo" className='TextLabel'>Metodo de pago</label><br />
                                    <DropDown select={(option) => {setSelected(option)}} selected={selected} dpbName='Elegir' options={options}></DropDown>

                                    
                                    <h2>Detalle</h2>
                                    <div className="line"></div>
                                    <div className="container__Detalle">
                                        <div className="Container__Detalle__Ropa">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ut officia ipsum corporis atque saepe odit assumenda! Nemo fuga, quia eligendi perferendis aperiam nam sapiente labore, blanditiis minima provident accusantium?
                                        </div>
                                        <div className="Container__Importe">
                                            
                                           <div className="labells__inputs">
                                            <label htmlFor="importe" className='labells__inputs__label'>Importe</label>
                                            <input type="text" id='importe' className='labells__inputs__input' disabled />
                                           </div>
                                           {typeBill === "A" &&<div className="labells__inputs">
                                            <label htmlFor="importe" className='labells__inputs__label'>IVA</label>
                                            <input type="text" id='importe' className='labells__inputs__input' disabled />
                                           </div>}
                                           <div className="labells__inputs">
                                            <label htmlFor="importe" className='labells__inputs__label'>TOTAL FACTURA</label>
                                            <input type="text" id='importe' className='labells__inputs__input' disabled />
                                           </div>
                                           <BtnModal nameBtn='Cerrar' btnModalName='Vender' className='modal__sale'>
                                            <h1>. Venta Realizada con Exito</h1>
                                           </BtnModal>
                                           
                                              
                                            
                                        </div>
                                    </div>
                                    

                                        
                            </div>

                    </BtnModal>
                </div> 
    </form>
            </div>
        

            



            
        </div>
        
    );
};

export default SalesNew;



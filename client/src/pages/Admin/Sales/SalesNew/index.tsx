import './SalesNew.css'
import {useState} from 'react';
import BtnModal from '../../../../components/Modal';

interface SalesNewProps {
};

const SalesNew: React.FC<SalesNewProps> = ({ }) => {

    const[typeBill, setTypeBill] = useState<'A' | 'B'>("B");

    const selectBillA = ()=>{

        setTypeBill("A")
    }
    const selectBillB = ()=>{
        
        setTypeBill("B")
    }

    return (
        
        

        <div className="main-container">
            

            <form className="FormContainer" onSubmit={event=> event.preventDefault()}>
                    
                        <div className="containerVender">    
                            <BtnModal nameBtn = "Aceptar" btnModalName = "Venta">

                                    <div className='containerBil'>
                                        <button onClick={selectBillA} className='ButtonBill'>
                                            <span>A</span>
                                        </button>
                                        <button onClick={selectBillB} className='ButtonBill'>
                                            <span>B</span>
                                        </button>
                                        <span>Factura {typeBill}</span>
                                    </div>
                                    <div className="containerInputModal">
                                            <h1>Cliente</h1>
                                            <div className="line"></div>
                                            <label htmlFor="text" className='TextLabel'>Apellido y Nombre</label>
                                            <input type="text" className='Inputs' />
                                            <label htmlFor="text" className='TextLabel'>CUIT</label>
                                            <input type="text" className='Inputs' />
                                            <label htmlFor="text" className='TextLabel'>Direccion</label>
                                            <input type="text" className='Inputs' />
                                            <label htmlFor="date" className='TextLabel'>Fecha</label>
                                            <input type="date" className='Inputs' />
                                            <div className="line"></div>
                                            <h1>Detalle</h1>
                                                
                                    </div>

                            </BtnModal>
                        </div> 
            </form>



            
        </div>
        
    );
};

export default SalesNew;



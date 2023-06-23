import './SalesNew.css'
import Providers from '../../Purchases/PurchasesNew/components/Providers';
import Input from '../../../../components/InputsSales';
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

                <div className='ProviderContainer'>
                    
                </div>

                <div className="containerDer">
                    <input type="text" className="Inputs" placeholder="Nombre y Apellido" />
                    <input type="date" className="Inputs" placeholder="Fechaaa" /> 
                    <input type="text" className="Inputs" placeholder="Localidad" />
                    <input type="text" className="Inputs" placeholder="Descripcion" />
                    
                    <div className="containerCheckBox">
                      <label className="containerLabel">
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                            One
                      </label>
                    </div>
                </div>
                <div className="ContainerIzq">
                    
                    <input type="text" className="Inputs" placeholder="Metodo de Pago" />

                        <div className="containerVender">

                            <input type="text" className="Inputs" placeholder="Cantidad" />
                            <input type="text" className="Inputs" placeholder="Importe" />
                            <input type="text" className="Inputs" placeholder="Total" />
                            
                            <BtnModal nameBtn = "Aceptar" btnModalName = "Venta">

                            <div className='containerBill'>
                                <h1>Tipo de Factura</h1>
                                <button onClick={selectBillA} className='ButtonBill'>
                                    <span>A</span>
                                </button>
                                <button onClick={selectBillB} className='ButtonBill'>
                                    <span>B</span>
                                </button>
                                <span>Factura {typeBill}</span>
                            </div>
                                <div className="containerInputModal">

                                    <input type="text" className="InputsModal" placeholder="Nombre y Apellido" />
                                    <input type="date" className="InputsModal" placeholder="Fechaaa" /> 
                                    <input type="text" className="InputsModal" placeholder="Localidad" />
                                    <input type="text" className="InputsModal" placeholder="Descripcion" />
                                    {typeBill === "A" && <input type="text" className="InputsModal" placeholder="Cuit" />}
                                    {typeBill === "A" && <input type="text" className="InputsModal" placeholder="Precio Unitario" />}
                                </div>
                            </BtnModal>

                        </div>
                    

                    
                </div>

                
            </form>



            
        </div>
        
    );
};

export default SalesNew;



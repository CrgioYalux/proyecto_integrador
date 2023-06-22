import './SalesNew.css'
import Input from '../../../../components/InputsSales';


interface SalesNewProps {
};

const SalesNew: React.FC<SalesNewProps> = ({ }) => {

    return (
        
        <div className="main-container">
            

            <h1 className="Titulo">VENTAS</h1>

            <form className="FormContainer">

                <div className="containerDer">
                    <input type="date" className="Inputs" placeholder="Fecha" />
                    <Input className='Inputs' type='text' placeHolder='Hola'></Input>   
                    <input type="text" className="Inputs" placeholder="Nombre y Apellido" />
                    <input type="text" className="Inputs" placeholder="Localidad" />
                    <input type="text" className="Inputs" placeholder="Descripcion" />
                </div>
                <div className="ContainerIzq">
                    <input type="text" className="Inputs" placeholder="Cuit" />
                    <input type="text" className="Inputs" placeholder="Metodo de Pago" />

                        <div className="containerVender">

                            <input type="text" className="Inputs" placeholder="Cantidad" />
                            <input type="text" className="Inputs" placeholder="Importe" />
                            <input type="text" className="Inputs" placeholder="Total" />
                            <input type="text" className="Inputs" placeholder="Precio Unitario" />
                            <input type="submit" className="FormBoton" value="Vender" />

                        </div>
                    

                    
                </div>

                
            </form>



            
        </div>
        
    );
};

export default SalesNew;



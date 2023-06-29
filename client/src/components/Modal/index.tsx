
import './Modal.css';
import {useState} from 'react';



type modalProps = {

     className?: string;
     children?: React.ReactNode;
     nameBtn?: string;
     btnModalName: string;
     closeModal?: boolean 
     
}




const BtnModal: React.FC<modalProps> = ({ children, nameBtn, btnModalName, className}) =>{

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

return(
    <>
        <button className='bnt-Modal' onClick={toggleModal}>
            {btnModalName}
        </button>

        {modal && (
            <>
                <div className="containerModal">
                    <div className="overlay">
                        <div className={className}>
                        {children}
                        </div>
                        {nameBtn === 'btncerrar' && <button onClick={toggleModal}>HOLA</button>}
                    </div>
                    
                </div>

                
                
            </>
            
        )}

        
    </>
)
};
export default BtnModal;

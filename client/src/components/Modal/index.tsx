
import './Modal.css';
import {useState} from 'react';


type modalProps = {

     className?: string;
     children?: React.ReactNode;
     nameBtn: string;
     btnModalName: string;
     
}




const BtnModal: React.FC<modalProps> = ({ children, nameBtn, btnModalName }) =>{

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
                        <div className="modalContent">
                        {children}
                        <button className='btn-Aceptar' onClick={toggleModal}>{nameBtn}</button>
                        </div>
                    </div>
                    
                </div>

                
                
            </>
            
        )}

        
    </>
)
};
export default BtnModal;

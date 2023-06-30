
import './Modal.css';
import {useState} from 'react';



type modalProps = {

     className?: string;
     children?: React.ReactNode;
     nameBtn?: string;
     btnModalName: string;
     closeModal?: boolean 
     btnCerrar?: string
     btnCerrarClassname?:string
     btnModal?: string
     btnVenderClassName?: string
     overlayClassName?: string
     
}




const BtnModal: React.FC<modalProps> = ({ children, overlayClassName , nameBtn, btnModalName, className, btnCerrar, btnCerrarClassname, btnVenderClassName }) =>{

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

return(
    <>
        <button className={btnVenderClassName} onClick={toggleModal}>
            {btnModalName}
        </button>

        {modal && (
            <>
                <div className="containerModal">
                    <div className={`overlay ${overlayClassName}`}>
                        <div className={className}>
                        {btnCerrar === 'si' && <button className={btnCerrarClassname} onClick={toggleModal}>{nameBtn}</button>}
                        {children}
                        </div>
                        
                    </div>
                    
                </div>

                
                
            </>
            
        )}

        
    </>
)
};
export default BtnModal;

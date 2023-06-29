
import './Modal.css';
import {useState} from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';



type modalProps = {

     className?: string;
     children?: React.ReactNode;
     nameBtn: string;
     btnModalName: string;
     
}




const BtnModal: React.FC<modalProps> = ({ children, nameBtn, btnModalName, className}) =>{

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    const navigate = useNavigate();

return(
    <>
        <button type='submit' className='bnt-Modal' onClick={toggleModal}>
            {btnModalName}
        </button>

        {modal && (
            <>
                <div className="containerModal">
                    <div className="overlay">
                        <div className={className}>
                        {children}
                        <Button className='btn-cerrar' onClick={() => navigate('/admin/sales')}>{nameBtn}</Button>
                        </div>
                    </div>
                    
                </div>

                
                
            </>
            
        )}

        
    </>
)
};
export default BtnModal;

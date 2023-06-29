import './DropDown.css'
import {useState} from 'react'

type dropDownProps = {

    options: string[]
    dpbName:string
    
}


const DropDown: React.FC<dropDownProps> = ({options, dpbName}) =>{

    const [isActive, SetIsActive] = useState(false)


    const handleClickDropdown = () => {
        SetIsActive(!isActive)
    }
    


    return(

        <div className="dropdown">
                <div className="dropdown__btn" onClick={handleClickDropdown}>
                    {dpbName} 
                </div>
                {isActive && (
                    <div className="dropdown__content">
                    {options.map((option) => (
                            <div className="dropdown__item" onClick={handleClickDropdown}>
                            {option}
                        </div>
                    ))}
                    
                    </div>

                )}
                

               </div>
    )
}

export default DropDown
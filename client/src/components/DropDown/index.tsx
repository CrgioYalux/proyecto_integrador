import './DropDown.css'
import {useState} from 'react'

type dropDownProps = {

    options: string[],
    dpbName:string,
    selected: string,
    select: (option:string) => void
    
    
}


const DropDown: React.FC<dropDownProps> = ({options, dpbName, selected, select}) =>{

    const [isActive, SetIsActive] = useState(false)


    const handleClickDropdown = () => {
        SetIsActive(!isActive)
        
    }
    


    return(

        <div className="dropdown">
                <div className="dropdown__btn" onClick={handleClickDropdown}>
                    {selected === "" ? dpbName : selected} 
                </div>
                {isActive && (
                    <div className="dropdown__content" >
                    {options.map((option) => (
                            <div className="dropdown__item" onClick={()=>{

                                    select(option)
                                    handleClickDropdown()

                            } }>
                            {option}
                            </div>
                    ))}
                    
                    </div>

                )}
                

               </div>
    )
}

export default DropDown
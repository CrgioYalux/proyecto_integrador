interface inputprops{
    className : string;
    type : string;
    placeHolder: string;
}

const Input : React.FC<inputprops> = ({className, type, placeHolder}) =>{
    return(
    
        <>
        <input type = {type ?? ''} className={`default ${className ?? ''}`} placeholder={placeHolder ?? ''}/>
        </>
    
    );
};

export default Input;
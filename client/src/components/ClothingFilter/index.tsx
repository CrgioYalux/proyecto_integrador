import './ClothingFilter.css';

interface ClothingFilterProps {

};

const ClothingFilter: React.FC <ClothingFilterProps> = ({})=>{
    return(
        <form>
            <label htmlFor="">Size</label>
            <input type="radio" name="" id="" /> 
            <input type="radio" name="" id="" />  
            <input type="radio" name="" id="" />  
            <input type="radio" name="" id="" />           
        </form>
    );
};

export default ClothingFilter;
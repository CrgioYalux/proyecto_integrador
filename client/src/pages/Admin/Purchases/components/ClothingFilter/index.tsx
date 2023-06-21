import './ClothingFilter.css';

interface ClothingFilterProps {

};

const ClothingFilter: React.FC <ClothingFilterProps> = ({})=>{
    return(
        <form className='ClothingFilter'>
            <p className='ClothingFilter_p'>Size</p>
            <div className="ClothingFilter_box">
                <div>
                <input className='ClothingFilter_radio' type="radio" name="size" id="s" /> 
                <label className='ClothingFilter_label' htmlFor="s">S</label>
                </div>

                <div>

                <input className='ClothingFilter_radio' type="radio" name="size" id="m" />
                <label className='ClothingFilter_label' htmlFor="m">M</label>
                </div>

                <div>

                <input className='ClothingFilter_radio' type="radio" name="size" id="l" />  
                <label className='ClothingFilter_label' htmlFor="l">L</label>  
                </div>

                <div>
                <input className='ClothingFilter_radio' type="radio" name="size" id="xl" /> 
                <label className='ClothingFilter_label' htmlFor="xl">XL</label>
                </div>
            </div>
            
            <p className='ClothingFilter_p'>Size</p>    
            <div className="ClothingFilter_box">
                <div>
                <input className='ClothingFilter_radio' type="radio" name="color" id="black" /> 
                <label htmlFor="black">BLACK</label>
                </div>
                
                <div>
                <input className='ClothingFilter_radio' type="radio" name="color" id="white" /> 
                <label htmlFor="white">WHITE</label> 
                </div>

                <div>
                <input className='ClothingFilter_radio' type="radio" name="color" id="blue" />  
                <label htmlFor="blue">BLUE</label>
                </div>

                <div>
                <input className='ClothingFilter_radio' type="radio" name="color" id="red" />
                <label htmlFor="red">RED</label>
                </div>
            </div>
                
        </form>
    );
};

export default ClothingFilter;
import './Filter.css';

import RadioListInput from '../../../../../../components/RadioListInput';

import type { ProductVariety } from '../../utils';

interface FilterProps {
    className?: string;

    sizes: ProductVariety[];
    colors: ProductVariety[];

    selectedSize: ProductVariety | null;
    selectedColor: ProductVariety | null;

    selectSize: (size: ProductVariety | null) => void;
    selectColor: (color: ProductVariety | null) => void;
};

const Filter: React.FC<FilterProps> = ({
    className = '',

    sizes,
    colors,
    
    selectedSize,
    selectedColor,

    selectSize,
    selectColor,
}) => {
    return (
        <div className={`Filter ${className}`}>
            <div className="Filter__size">
                <strong>Sizes</strong>
                <RadioListInput
                className='Filter-size__RadioListInput'
                list={sizes}
                selected={selectedSize}
                select={selectSize}
                allowToDeselect={false}
                htmlFor='size'
                />
            </div>
            <div className="Filter__color">
                <strong>Colors</strong>
                <RadioListInput 
                className='Filter-color__RadioListInput'
                list={colors}
                selected={selectedColor}
                select={selectColor}
                allowToDeselect={false}
                htmlFor='color'
                />
            </div>
        </div>
    );
};

export default Filter;

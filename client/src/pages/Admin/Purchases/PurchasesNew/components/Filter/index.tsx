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
                className='Filter__RadioListInput Filter-size__RadioListInput'
                list={sizes}
                selected={selectedSize}
                select={selectSize}
                allowToDeselect={false}
                htmlFor='size'
                RenderAs={(item) => {
                    return (
                        <div
                        title={item.name}
                        className={`Filter-RadioListInput__box Filter-size__box ${selectedSize?.id === item.id ? '--selected' : '--not-selected'}`}
                        >{item.name.toUpperCase()}</div>
                    );
                }}
                />
            </div>
            <div className="Filter__color">
                <strong>Colors</strong>
                <RadioListInput 
                className='Filter__RadioListInput Filter-color__RadioListInput'
                list={colors}
                selected={selectedColor}
                select={selectColor}
                allowToDeselect={false}
                htmlFor='color'
                RenderAs={(item) => {
                    return (
                        <div
                        className={`Filter-RadioListInput__box Filter-color__box ${selectedColor?.id === item.id ? '--selected' : '--not-selected'}`}
                        style={{ backgroundColor: item.name }}
                        title={item.name}
                        ></div>
                    );
                }}
                />
            </div>
        </div>
    );
};

export default Filter;

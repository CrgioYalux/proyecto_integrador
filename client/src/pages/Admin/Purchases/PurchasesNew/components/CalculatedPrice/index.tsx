import './CalculatedPrice.css';

interface CalculatedPriceProps {
    className?: string;

    unitPrice: number;
    units: number;

    setUnits: (units: number) => void;
};

const CalculatedPrice: React.FC<CalculatedPriceProps> = ({
    className = '',
    unitPrice,
    units,
    setUnits,
}) => {

    const handleOnChange = (event: React.SyntheticEvent) => {
        const input = event.target as HTMLInputElement;
        const value = Number(input.value);
        if (!isNaN(value)) {
            setUnits(value);
        }
    };

    return (
        <div className={`CalculatedPrice ${className}`}>
            <label className='CalculatedPrice__label' htmlFor='units'>
                <span>Units</span>
                <input 
                type='text'
                id='units'
                value={units}
                onChange={handleOnChange}
                />
            </label>
            <span>Total price: {(unitPrice * units).toFixed(2)}</span>
        </div>
    );
};

export default CalculatedPrice;

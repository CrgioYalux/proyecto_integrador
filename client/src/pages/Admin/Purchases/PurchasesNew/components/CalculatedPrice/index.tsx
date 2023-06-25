import './CalculatedPrice.css';

interface CalculatedPriceProps {
    className?: string;
    children?: React.ReactNode;

    unitPrice: number;
    units: number;

    setUnits: (units: number) => void;
};

const CalculatedPrice: React.FC<CalculatedPriceProps> = ({
    className = '',
    children,
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
                <strong>Units</strong>
                <input 
                type='text'
                id='units'
                value={units}
                onChange={handleOnChange}
                />
            </label>
            <span className='CalculatedPrice__price'>Total price: ${(unitPrice * units).toFixed(2)}</span>
            {children}
        </div>
    );
};

export default CalculatedPrice;

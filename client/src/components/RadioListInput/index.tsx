import './RadioListInput.css';

type MinimumItemProps = {
    id: number;
    name: string;
} & Record<string, unknown>;

interface RadioListInputProps {
    className?: string;
    htmlFor: string;
    RenderAs?: (item: MinimumItemProps) => React.ReactNode;

    list: MinimumItemProps[];
    select: (item: MinimumItemProps | null) => void;
    selected: MinimumItemProps | null;
    allowToDeselect?: boolean;
};

const RadioListInput: React.FC<RadioListInputProps> = ({ 
    className = '',
    htmlFor,
    RenderAs,
    list,
    select,
    selected,
    allowToDeselect = false,
}) => {
    return (
        <div className={`RadioListInput ${className}`}>
            {list.map((item) => (
                <label className='RadioListInput__label' htmlFor={`${htmlFor}-item-${item.id}`} key={item.id}>
                    <input
                    className='RadioListInput-label__input'
                    type='radio'
                    name={htmlFor}
                    id={`${htmlFor}-item-${item.id}`}
                    onChange={() => select(item)}
                    onClick={() => allowToDeselect && select(null)}
                    checked={selected?.id === item.id}
                    />
                    {!RenderAs ? <span className='RadioListInput-label__span'>{item.name}</span> : RenderAs(item)}
                </label>
            ))}
        </div>
    );
};

export default RadioListInput;

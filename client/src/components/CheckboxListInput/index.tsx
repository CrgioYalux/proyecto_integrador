import './CheckboxListInput.css';

type MinimumItemProps = {
    id: number;
    name: string;
} & Record<string, unknown>;

interface CheckboxListInputProps {
    className?: string;
    htmlFor: string;
    RenderAs?: (item: MinimumItemProps) => React.ReactNode;

    list: MinimumItemProps[];
    select: (cb: (items: MinimumItemProps[]) => MinimumItemProps[]) => void;
    selected: MinimumItemProps[];
    maxQuantitySelected?: number;
};

const CheckboxListInput: React.FC<CheckboxListInputProps> = ({ 
    className = '',
    htmlFor,
    RenderAs,
    list,
    select,
    selected,
    maxQuantitySelected = list.length,
}) => {
    const noSelectsLeft = maxQuantitySelected !== list.length && maxQuantitySelected === selected.length;

    return (
        <div className={`CheckboxListInput ${className}`}>
            {list.map((item) => {
                const isSelected = !!(selected.find(({ id }) => id === item.id));
                const selectableCSS = isSelected 
                    ? ''
                    : noSelectsLeft ? '--unselectable' : '--selectable';

                return (
                    <label className={`CheckboxListInput__label ${selectableCSS}`} htmlFor={`${htmlFor}-item-${item.id}`} key={item.id}>
                        <input
                        className='CheckboxListInput-label__input'
                        type='checkbox'
                        name={htmlFor}
                        id={`${htmlFor}-item-${item.id}`}
                        onChange={() => {
                            if (!isSelected && noSelectsLeft) return;
                            if (!isSelected) select((items) => [...items, item]) 
                            else select((items) => items.filter(({ id }) => id !== item.id))
                        }}
                        disabled={!isSelected && noSelectsLeft}
                        checked={isSelected}
                        />
                        {!RenderAs ? <span className='CheckboxListInput-label__span'>{item.name}</span> : RenderAs(item)}
                    </label>
                )
            })}
        </div>
    );
};

export default CheckboxListInput;

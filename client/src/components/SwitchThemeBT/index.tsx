import { useTheme } from '../../providers/Theme';

interface SwitchThemeBTProps {
    className?: string;
};

const SwitchThemeBT: React.FC<SwitchThemeBTProps> = ({ className }) => {
    const [theme, switchTheme] = useTheme();

    return (
        <button 
        onClick={() => switchTheme()}
        className={className ?? ''}
        >
            {theme.slice(0, 1).toUpperCase() + theme.slice(1)} mode
        </button>
    );
};

export default SwitchThemeBT;

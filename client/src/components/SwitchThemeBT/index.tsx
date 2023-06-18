import { useTheme } from '../../providers/Theme';
import Button from '../Button';

interface SwitchThemeBTProps {
    className?: string;
};

const SwitchThemeBT: React.FC<SwitchThemeBTProps> = ({ className }) => {
    const [theme, switchTheme] = useTheme();

    return (
        <Button 
        onClick={() => switchTheme()}
        className={className ?? ''}
        >
            {theme.slice(0, 1).toUpperCase() + theme.slice(1)} mode
        </Button>
    );
};

export default SwitchThemeBT;

import './SwitchThemeBT.css';

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
        className={`SwitchThemeBT ${className ?? ''}`}
        >
            {theme === 'dark' ? 'Light' : 'Dark'} mode
        </Button>
    );
};

export default SwitchThemeBT;

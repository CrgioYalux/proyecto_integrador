import { useTheme } from '../../providers/Theme';

interface SwitchThemeBTProps {

};

const SwitchThemeBT: React.FC<SwitchThemeBTProps> = () => {
    const [theme, switchTheme] = useTheme();

    return (
        <button onClick={() => switchTheme()}>{theme}</button>
    );
};

export default SwitchThemeBT;

import { createContext, useContext, useState, useEffect } from "react";
import type { Theme } from './utils';
import { getSystemTheme, applyTheme } from './utils';

type ThemeContext = readonly [
    theme: Theme,
    switchTheme: () => void,
];

const Context = createContext<ThemeContext>([
    'dark',
    () => {},
]);

interface ThemeContextProviderProps {
    children: React.ReactNode;
};

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const systemTheme = getSystemTheme();
        setTheme(systemTheme);
        applyTheme(systemTheme);
    }, []);

    const switchTheme = (): void => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    const value: ThemeContext = [theme, switchTheme];

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default ThemeContextProvider;
export const useTheme = () => useContext<ThemeContext>(Context);

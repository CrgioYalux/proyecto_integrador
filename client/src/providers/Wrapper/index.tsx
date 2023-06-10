import ThemeContextProvider from '../Theme';
import { BrowserRouter } from 'react-router-dom';

interface ProvidersWrapperProps {
    children: React.ReactNode;
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </ThemeContextProvider>
    );
};

export default ProvidersWrapper;

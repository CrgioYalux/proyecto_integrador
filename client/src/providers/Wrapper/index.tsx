import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from '../Theme';
import AdminSystemContextProvider from '../AdminSystem';


interface ProvidersWrapperProps {
    children: React.ReactNode;
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <AdminSystemContextProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </AdminSystemContextProvider>
        </ThemeContextProvider>
    );
};

export default ProvidersWrapper;

import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from '../Theme';
import AdminSystemContextProvider from '../AdminSystem';
import DatabaseContextProvider from '../Database';

interface ProvidersWrapperProps {
    children: React.ReactNode;
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children }) => {
    return (
        <ThemeContextProvider>
            <DatabaseContextProvider>
                <AdminSystemContextProvider>
                    <BrowserRouter>
                        {children}
                    </BrowserRouter>
                </AdminSystemContextProvider>
            </DatabaseContextProvider>
        </ThemeContextProvider>
    );
};

export default ProvidersWrapper;

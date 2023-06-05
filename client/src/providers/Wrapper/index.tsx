import ThemeContextProvider from "../Theme";

interface ProvidersWrapperProps {
    children: React.ReactNode;
};

const ProvidersWrapper: React.FC<ProvidersWrapperProps> = ({ children }) => {
    return (
        <ThemeContextProvider>
        {children}
        </ThemeContextProvider>
    );
};

export default ProvidersWrapper;

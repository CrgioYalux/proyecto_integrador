import './Admin.css';

interface AdminProps {
    children?: React.ReactNode;
};

const Admin: React.FC<AdminProps> = ({ children }) => {
    return (
        <div className='Admin'>
            {children}
        </div>
    );
};

export default Admin;

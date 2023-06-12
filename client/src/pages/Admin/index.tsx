import './Admin.css';
import SwitchThemeBT from '../../components/SwitchThemeBT';

interface AdminProps {
    children?: React.ReactNode;
};

const Admin: React.FC<AdminProps> = ({ children }) => {
    return (
        <div className='Admin'>
            <SwitchThemeBT className='Admin_SwitchThemeBT' />
            {children}
        </div>
    );
};

export default Admin;

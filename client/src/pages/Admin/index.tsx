import './Admin.css';

import { useLocation } from 'react-router-dom';

import PreviousPageBT from '../../components/PreviousPageBT';
import SidePanel from './SidePanel';

interface AdminProps {
    children?: React.ReactNode;
};

const Admin: React.FC<AdminProps> = ({ children }) => {
    const location = useLocation();

    return (
        <div className='Admin'>
            {(location.pathname !== '/admin' && location.pathname !== '/admin/login') 
                && <PreviousPageBT className='Admin__previous-page-bt'/>}
            <SidePanel />
            {children}
        </div>
    );
};

export default Admin;

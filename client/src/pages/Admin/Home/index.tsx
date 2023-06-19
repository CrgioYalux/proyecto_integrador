import './Home.css';

import { useAdminSystem } from "../../../providers/AdminSystem";
import { useNavigate } from 'react-router-dom';

import logoImgUrl from '../../../assets/TrendStyle.png';
import Button from '../../../components/Button';

interface HomeProps {};

const Home: React.FC<HomeProps> = ({ }) => {
    const [state, actions] = useAdminSystem();
    const navigate = useNavigate();

    return (
        <div className='Home'>
            <h1>Welcome {state.businessInfo.name}!</h1>
            <div className='Home_logo'>
                <img src={logoImgUrl} />
            </div>
            <div className='Home_container'>
                <Button className='Home_linkButton' onClick={() => navigate('/admin/sales')}><span>SALES</span></Button>
                <Button className='Home_linkButton' onClick={() => navigate('/admin/purchases')}><span>PURCHASES</span></Button>
                <Button className='Home_linkButton' onClick={() => navigate('/admin/accounting_entries')}><span>ACCOUNTING ENTRIES</span></Button>
                <Button className='Home_linkButton' onClick={() => navigate('/admin/inventory')}><span>INVENTORY</span></Button>
                <Button className='Home_linkButton' onClick={() => navigate('/admin/accounts')}><span>ACCOUNTS</span></Button>
            </div>
            <Button className='Home_logOutButton' onClick={() => actions.userSession.logOut()}>log out</Button>
        </div>
    );
};

export default Home;

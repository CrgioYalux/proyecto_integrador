import './Home.css';
import { useAdminSystem } from "../../../providers/AdminSystem";
import logoImgUrl from '../../../assets/TrendStyle.png';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

interface HomeProps {};

const Home: React.FC<HomeProps> = ({ }) => {
    const [state, actions] = useAdminSystem();

    return (
        <div className='Home'>
            <h1>Welcome {state.businessInfo.name}!</h1>
            <div className='Home_logo'>
                <img src={logoImgUrl} />
            </div>
            <div className='Home_container'>
                <Button className='Home_linkButton'>
                    <Link to="/admin/sales">SALES</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/accounting_entries">ACCOUNTING ENTRIES</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/purchases">PURCHASES</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/inventory">INVENTORY</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/accounts">ACCOUNTS</Link>
                </Button>
            </div>
            <Button className='Home_logOutButton' onClick={() => actions.userSession.logOut()}>log out</Button>
        </div>
    );
};

export default Home;

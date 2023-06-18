import './Home.css';
import { useAdminSystem } from "../../../providers/AdminSystem";
import logoImgUrl from '../../../assets/TrendStyle.png';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';

interface HomeProps {
};

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
                    <Link to="/admin/ventas">VENTAS</Link>
                </Button>

                <Button className='Home_linkButton'>
                    <Link to="/admin/asientos">ASIENTOS</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/compras">COMPRAS</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/registro">REGISTRO COMPRA</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/inventario">INVENTARIO</Link>
                </Button>
                <Button className='Home_linkButton'>
                    <Link to="/admin/cuentas">CUENTAS</Link>
                </Button>
                
            </div>
            <Button className='Home_logOutButton' onClick={() => actions.userSession.logOut()}>log out</Button>
        </div>
    );
};

export default Home;

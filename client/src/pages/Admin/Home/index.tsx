import './Home.css';
import { useAdminSystem } from "../../../providers/AdminSystem";
import logoImgUrl from '../../../assets/TrendStyle.png';

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
            <ul>
                <li>Ventas</li>
                <li>Compras</li>
                <li>Inventario</li>
            </ul>
            <button onClick={() => actions.userSession.logOut()}>log out</button>
        </div>
    );
};

export default Home;

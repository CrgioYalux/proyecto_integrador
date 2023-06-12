import './Home.css';
import { useAdminSystem } from "../../../providers/AdminSystem";

interface HomeProps {
};

const Home: React.FC<HomeProps> = ({ }) => {
    const [state, actions] = useAdminSystem();

    return (
        <div className='Home'>
        <h1>Welcome {state.businessInfo.name}!</h1>
        <button onClick={() => actions.userSession.logOut()}>log out</button>
        </div>
    );
};

export default Home;

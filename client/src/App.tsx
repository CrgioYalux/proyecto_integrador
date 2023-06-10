import './App.css';

import { Routes, Route, Link } from 'react-router-dom';
import SwitchThemeBT from './components/SwitchThemeBT';

const Home: React.FC<{}> = ({ }) => {
    return (
        <div className='Home'>
            Home
            <Link to='/cart'>Cart</Link>
            <Link to='/admin'>Admin</Link>
        </div>
    );
};

const Cart: React.FC<{}> = ({ }) => {
    return (
        <div className='Cart'>
            Cart
            <Link to='/'>Home</Link>
        </div>
    );
};

const Admin: React.FC<{}> = ({ }) => {
    return (
        <div className='Admin'>
            Admin
            <Link to='/'>Home</Link>
        </div>
    );
};

function App() {
    return (
        <div className='App'>
            <SwitchThemeBT />
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
                <Route path='/admin'>
                    <Route index element={<Admin />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;

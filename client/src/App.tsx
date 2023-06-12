import './App.css';

import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import TimedRender from './components/TimedRender';
import Login from './pages/Admin/Login';
import { useAdminSystem } from './providers/AdminSystem';

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
        </div>
    );
};

function App() {
    const [state, actions] = useAdminSystem();
    return (
        <div className='App'>
            {/*<SwitchThemeBT />*/}
            {state.userSession.logged && <button onClick={() => actions.userSession.logOut()}>log out</button>}
            <Routes>
                <Route path='/'>
                    <Route index element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                </Route>
                <Route path='/admin'>
                    <Route index element={state.userSession.logged ? <Admin /> : <Navigate to='/admin/login' />} />
                    <Route
                    path='login'
                    element={state.userSession.logged 
                    ? <TimedRender mode='after' seconds={2} fallback={<Loader />}>
                        <Navigate to='/admin' />
                      </TimedRender> 
                    : <Login />}
                    />
                    <Route path='*' element={state.userSession.logged ? <div>404</div> : <Navigate to='/admin/login' />} />
                </Route>
                <Route path='*' element={<div>404</div>} />
            </Routes>
        </div>
    );
};

export default App;

import './App.css';

import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom';
import { useAdminSystem } from './providers/AdminSystem';
import Admin from './pages/Admin';
import Home from './pages/Admin/Home';
import Login from './pages/Admin/Login';

const Cart: React.FC<{}> = ({ }) => {
    return (
        <div className='Cart'>
            Cart
            <Link to='/'>Home</Link>
        </div>
    );
};

function App() {
    const [state] = useAdminSystem();

    return (
        <Routes>
            <Route path='/'>
                <Route index element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Route>

            <Route path='/admin' element={<Admin><Outlet /></Admin>}>
                <Route index element={state.userSession.logged ? <Home /> : <Navigate to='/admin/login' />} />
                <Route
                path='login'
                element={state.userSession.logged ? <Navigate to='/admin' /> : <Login />}
                />
                <Route path='*' element={state.userSession.logged ? <div>404</div> : <Navigate to='/admin/login' />} />
            </Route>

            <Route path='*' element={<div>404</div>} />
        </Routes>
    );
};

export default App;

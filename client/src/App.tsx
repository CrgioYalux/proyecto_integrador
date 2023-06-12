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
            <Route path='/admin' element={<Admin><Outlet /></Admin>}>
                <Route index element={state.userSession.logged ? <Home /> : <Navigate to='/admin/login' />} />
                <Route
                path='login'
                element={state.userSession.logged ? <Navigate to='/admin' /> : <Login />}
                />
                <Route path='*' element={<h1>404</h1>} />
            </Route>

            <Route path='/'>
                <Route index element={<h1>Ecommerce goes here</h1>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<h1>404</h1>} />
            </Route>
        </Routes>
    );
};

export default App;

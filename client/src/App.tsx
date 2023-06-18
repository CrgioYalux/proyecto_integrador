import './App.css';

import { Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import { useAdminSystem } from './providers/AdminSystem';
import Admin from './pages/Admin';
// import Home from './pages/Admin/Home';
import Sales from './pages/Admin/Sales';
import Login from './pages/Admin/Login';

interface ProtectedRouteProps { 
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ }) => {
    const [state] = useAdminSystem();

    if (state.userSession.logged) return <Outlet /> 
    return <Navigate to='/admin/login' replace />
};

const Home: React.FC<{}> = () => {
    return (
        <div>
            <Link to='/admin/sales'>sales</Link>
            <Link to='/admin/sales/new'>new sale</Link>
            <Link to='/admin/purchases'>purchases</Link>
            <Link to='/admin/inventory'>inventory</Link>
            <Link to='/admin'>admin</Link>
        </div>
    );
};

function App() {
    const [state] = useAdminSystem();

    return (
        <Routes>
            <Route path='/admin' element={<Admin><Outlet /></Admin>}>
                <Route element={<ProtectedRoute />}>
                    {/* Route for Home page */}
                    <Route index element={<Home />} />

                    {/* Route for Sales page */}
                    <Route path='sales'>
                        <Route index element={<div>Where the sales history should go</div>} />
                        <Route path='new' element={<Sales />} />
                    </Route>

                    {/* Route for Purchases page */}
                    <Route path='purchases'>
                        <Route index element={<div>Where the purchases history should go</div>} />
                        <Route path='new' element={<div>Where new purchases should be made</div>}/>
                    </Route>

                    {/* Route for Accounting Entries */}
                    <Route path='accounting_entries'>
                        <Route index element={<div>Where the accounting entries history should go</div>} />
                        <Route path=':id' element={<div>Where a specific accounting entry should be shown</div>} />
                    </Route>

                    {/* Route for Inventory page */}
                    <Route path='inventory' element={<div>Where the inventory should go</div>} />
                </Route>

                {/* Route for Login page */}
                <Route path='login' element={state.userSession.logged ? <Navigate to='/admin'/> : <Login />} />

                {/* Fallback route for when no path matches */}
                <Route path='*' element={<h1>404</h1>} />
            </Route>

            <Route path='/'>
                <Route index element={<Navigate to='/admin'/>} />
                <Route path='/cart' element={<div>Cart component</div>} />
                <Route path='*' element={<h1>404</h1>} />
            </Route>
        </Routes>
    );
};

export default App;

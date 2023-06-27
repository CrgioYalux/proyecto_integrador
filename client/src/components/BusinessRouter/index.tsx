import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useAdminSystem } from '../../providers/AdminSystem';

import ProtectedRoute from './ProtectedRoute';
import Admin from '../../pages/Admin';
import Login from '../../pages/Admin/Login';
import Sales from '../../pages/Admin/Sales';
import Home from '../../pages/Admin/Home';
import Inventory from '../../pages/Admin/Inventory'
import Purchases from '../../pages/Admin/Purchases';
import PurchasesNew from '../../pages/Admin/Purchases/PurchasesNew';
import Accounts from '../../pages/Admin/Accounts';

interface BusinessRouterProps {};

const BusinessRouter: React.FC<BusinessRouterProps> = () => {
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
                        <Route index element={<Purchases />} />
                        <Route path='new' element={<PurchasesNew />}/>
                    </Route>

                    {/* Route for Accounting Entries */}
                    <Route path='accounting_entries'>
                        <Route index element={<div>Where the accounting entries history should go</div>} /> 
                        <Route path=':id' element={<div>Where a specific accounting entry should be shown</div>} />
                    </Route>

                    {/* Route for Accounts */}
                    <Route path='accounts'>
                        <Route index element={<Accounts />} /> 
                        <Route path=':id' element={<div>Where a specific account should be shown</div>} />
                    </Route>

                    {/* Route for Inventory page */}
                    <Route path='inventory' element={<Inventory />} />
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

export default BusinessRouter;

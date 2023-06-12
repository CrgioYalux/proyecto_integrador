import { createContext, useContext, useState } from 'react';
import { BUSINESS_INFO } from './consts';
import type { AdminSystemState, AdminSystemActions, UserSessionState, UserSessionActions } from './utils';

type AdminSystemContext = readonly [
    state: AdminSystemState,
    actions: AdminSystemActions,
];

const Context = createContext<AdminSystemContext>([
    { userSession: { logged: false }, businessInfo: BUSINESS_INFO },
    { userSession: { logIn: () => {}, logOut: () => {} } },
]);

interface AdminSystemContextProviderProps {
    children: React.ReactNode;
};

const AdminSystemContextProvider: React.FC<AdminSystemContextProviderProps> = ({ children }) => {
    const [userSessionState, setUserSessionState] = useState<UserSessionState>({ logged: false });

    const userSessionActions: UserSessionActions = {
        logIn: () => { setUserSessionState((prev) => ({ ...prev, logged: true })); },
        logOut: () => { setUserSessionState((prev) => ({ ...prev, logged: false })); },
    };

    const value: AdminSystemContext = [
        { userSession: userSessionState, businessInfo: BUSINESS_INFO },
        { userSession: userSessionActions },
    ];

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default AdminSystemContextProvider;
export const useAdminSystem = () => useContext<AdminSystemContext>(Context);


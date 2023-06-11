import { createContext, useContext, useState } from 'react';

type AdminLoginInfo = {
    role: 'admin' | 'readonly',
    username: string,
    password: string,
};

type UserSessionState = {
    logged: boolean,
    loginInfo?: AdminLoginInfo,
};

type UserSessionActions = {
    logIn: () => void,
    logOut: () => void,
};

type AdminSystemState = {
    userSession: UserSessionState,
};

type AdminSystemActions = {
    userSession: UserSessionActions,
};

type AdminSystemContext = readonly [
    state: AdminSystemState,
    actions: AdminSystemActions,
];

const Context = createContext<AdminSystemContext>([
    { userSession: { logged: false } },
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
        { userSession: userSessionState },
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


import { createContext, useContext, useState } from 'react';
import { BUSINESS_INFO, LOGIN_INFO } from './consts';
import type { AdminSystemState, AdminSystemActions, UserSessionState, UserSessionActions } from './utils';

type AdminSystemContext = readonly [
    state: AdminSystemState,
    actions: AdminSystemActions,
];

const Context = createContext<AdminSystemContext>([
    { userSession: { logged: false }, businessInfo: BUSINESS_INFO },
    { userSession: { logIn: () => new Promise(() => {}), logOut: () => {} } },
]);

type AdminSystemContextProviderProps = {
    children: React.ReactNode;
};

const AdminSystemContextProvider: React.FC<AdminSystemContextProviderProps> = ({ children }) => {
    const [userSessionState, setUserSessionState] = useState<UserSessionState>({ logged: false });

    const userSessionActions: UserSessionActions = {
        logIn: (loginInfo) => {
            return new Promise<boolean>((resolve, reject) => {
                setTimeout(() => {
                    if (loginInfo.username === LOGIN_INFO.username && loginInfo.password === LOGIN_INFO.password) {
                        setUserSessionState((prev) => ({ ...prev, logged: true, loginInfo: LOGIN_INFO }));
                        resolve(true);
                    } else {
                        if (userSessionState.logged) {
                            setUserSessionState((prev) => ({ ...prev, logged: false, loginInfo: undefined }));
                        }
                        reject('Wrong credentials');
                    }
                }, 2000);

                // get /api/admin/login { username, password }
                // 
            });
        },
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


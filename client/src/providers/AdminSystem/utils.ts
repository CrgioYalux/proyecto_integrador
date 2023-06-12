type BusinessInfo = {
    name: string,
    cuit: string,
    tel: string,
    email: string,
    address: string,
    category: string,
    activityStart: string,
};

type AdminLoginInfo = {
    role: 'admin' | 'readonly',
    username: string,
    password: string,
};

type LoginInfo = Omit<AdminLoginInfo, 'role'>;

type UserSessionState = {
    logged: boolean,
    loginInfo?: AdminLoginInfo,
};

type UserSessionActions = {
    logIn: (loginInfo: LoginInfo) => Promise<boolean>,
    logOut: () => void,
};

type AdminSystemState = {
    userSession: UserSessionState,
    businessInfo: BusinessInfo,
};

type AdminSystemActions = {
    userSession: UserSessionActions,
};

export type { BusinessInfo, LoginInfo, AdminLoginInfo, AdminSystemState, AdminSystemActions, UserSessionState, UserSessionActions };

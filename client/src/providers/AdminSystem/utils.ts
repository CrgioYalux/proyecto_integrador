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
    businessInfo: BusinessInfo,
};

type AdminSystemActions = {
    userSession: UserSessionActions,
};

export type { BusinessInfo, AdminSystemState, AdminSystemActions, UserSessionState, UserSessionActions };

import type { BusinessInfo, AdminLoginInfo } from './utils';

const BUSINESS_INFO: BusinessInfo = {
    name: 'SOL SRL',
    cuit: '33-45454545-9',
    tel: '0381-4000000',
    email: 'sorsrl@gmail.com',
    address: 'SAN MARTIN 145 - SMT',
    category: 'Responsable Inscripto',
    activityStart: '01/05/2001',
};

const LOGIN_INFO: AdminLoginInfo = {
    username: 'admin',
    password: 'admin',
    role: 'admin',
};

export { BUSINESS_INFO, LOGIN_INFO };

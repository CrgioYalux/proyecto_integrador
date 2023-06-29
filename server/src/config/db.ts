import dotenv from 'dotenv';
import path from 'path';

const IS_PROD = process.env.NODE_ENV === 'production';
const PATH_TO_ENV = path.join(
    __dirname, '..', '..', '.env'
);

type Database = {
    HOST: string,
    PORT: number,
    USER: string,
    PASS: string,
    NAME: string,
};

const env = dotenv.config({ path: PATH_TO_ENV }).parsed;

const HOST = IS_PROD ? process.env.DB_HOST : env?.DB_HOST;
const PORT = IS_PROD ? process.env.DB_PORT : env?.DB_PORT;
const USER = IS_PROD ? process.env.DB_USER : env?.DB_USER;
const PASS = IS_PROD ? process.env.DB_PASS : env?.DB_PASS;
const NAME = IS_PROD ? process.env.DB_NAME : env?.DB_NAME;

const DB: Database = {
    HOST: HOST ?? 'localhost',
    PORT: Number(PORT) ?? 3306,
    USER: USER ?? 'root',
    PASS: PASS ?? 'root',
    NAME: NAME ?? 'test',
};

export { DB };

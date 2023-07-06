import path from 'path';

const IS_PROD: boolean = process.env.NODE_ENV === 'production';
const IS_FRESH_START: boolean = process.env.DB_MODE === 'fresh';
const PATH_TO_ENV_FILE: string = path.join(
    __dirname, '..', '..', '.env'
);

export { IS_PROD, IS_FRESH_START, PATH_TO_ENV_FILE };

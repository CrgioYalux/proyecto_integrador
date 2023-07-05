import path from 'path';

const IS_PROD: boolean = process.env.NODE_ENV === 'production';
const PATH_TO_ENV_FILE: string = path.join(
    __dirname, '..', '..', '.env'
);

export { IS_PROD, PATH_TO_ENV_FILE };

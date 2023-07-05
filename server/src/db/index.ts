import { pool } from './connection';
import business from './business';

const db = { pool, business };

export default db;

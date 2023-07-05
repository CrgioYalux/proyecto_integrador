import mysql from 'mysql';
import { DB } from "../config/db";

const pool = mysql.createPool({
    multipleStatements: true, // this allows to run multiple statements from a file
    connectionLimit: 10,
    host: DB.HOST,
    port: DB.PORT,
    user: DB.USER,
    password: DB.PASS,
    database: DB.NAME,
});

export { pool };

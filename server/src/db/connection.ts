import { DB } from "../config/db";
import mysql from 'mysql';
import { CREATE_TABLES } from './const';

const connection = mysql.createConnection({
    host: DB.HOST,
    port: DB.PORT,
    user: DB.USER,
    password: DB.PASS,
    database: DB.NAME,
});

// connection.connect();

function createTables(): void {
    CREATE_TABLES.forEach((q) => {
        connection.query(q, (err, results, fields) => {
            if (err) throw err;
            console.log(`EXEC '${q}': ${results}`);
        });
    });
    connection.query('SHOW TABLES', (err, results, fields) => {
        if (err) throw err;
        console.log(`EXEC 'SHOW TABLES': ${JSON.stringify(results, null, 2)}`);
    });
};

// connection.end();

export { connection, createTables };

import fs from 'fs';
import path from 'path'
import mysql from 'mysql';

import { DB } from "../config/db";
// import { CREATE_TABLES, CREATE_STORED_PROCEDURES } from './const';

import type { PoolConnection } from "mysql";

const pool = mysql.createPool({
    multipleStatements: true, // this allows to run multiple statements from a file
    connectionLimit: 10,
    host: DB.HOST,
    port: DB.PORT,
    user: DB.USER,
    password: DB.PASS,
    database: DB.NAME,
});

const pathToQuery = (filename: string): string => path.join(__dirname, '..', '..', 'sql_queries', filename);

function createTables(pool: PoolConnection): void {
    const query = fs.readFileSync(pathToQuery('create_tables.sql'), 'utf8');
    pool.beginTransaction((transaction_error) => {
        if (transaction_error) throw { transaction_error };
        pool.query(query, (query_error, results) => {
            if (query_error) {
                pool.rollback(() => {
                    throw { query_error };
                });
            }
            console.log(`Exec ${query}`);
            console.log(`Resulted in ${results}`);
            pool.commit((commit_error) => {
                if (commit_error) {
                    pool.rollback(() => {
                        throw { commit_error };
                    });
                }
                pool.query('SHOW TABLES', (err, results) => {
                    if (err) throw err;
                    console.log('Created tables succesfully!');
                    console.log(`EXEC 'SHOW TABLES': ${JSON.stringify(results, null, 2)}`);
                });
            });
        });
    });
};

function createStoredProcedures(pool: PoolConnection): void {
    const query = fs.readFileSync(pathToQuery('create_stored_procedures.sql'), 'utf8');
    pool.beginTransaction((transaction_error) => {
        if (transaction_error) throw { transaction_error };
        pool.query(query, (query_error, results) => {
            if (query_error) {
                pool.rollback(() => {
                    throw { query_error };
                });
            }
            console.log(`Exec ${query}`);
            console.log(`Resulted in ${results}`);
            pool.commit((commit_error) => {
                if (commit_error) {
                    pool.rollback(() => {
                        throw { commit_error };
                    });
                }
                console.log('Created stored procedures succesfully!');
            });
            
        })
    });
};

function test(pool: PoolConnection): void {
    pool.query('Show tables', [5], (err, results, fields) => {
        if (err) throw err;
        console.log(`Database tables: ${JSON.stringify(results, null, 2)}`);
    });
};

export { pool, createTables, createStoredProcedures, test };

import fs from 'fs';
import { pathToStarterQueries } from './helpers';

import type { PoolConnection } from 'mysql';
import { QueryExecutionState } from './utils';

const execDropEverythingQuery: string = `
    CALL drop_everything(?);
`;

const dropTables: string[] = [
    'DROP TABLE IF EXISTS SimpleAccountingEntry;',
    'DROP TABLE IF EXISTS ComplexAccountingEntry;',
    'DROP TABLE IF EXISTS Account;',
    'DROP TABLE IF EXISTS Inventory;',
    'DROP TABLE IF EXISTS User;',
    'DROP TABLE IF EXISTS SimplePurchaseOperation;',
    'DROP TABLE IF EXISTS ComplexPurchaseOperation;',
    'DROP TABLE IF EXISTS SimpleSaleOperation;',
    'DROP TABLE IF EXISTS ComplexSaleOperation;',
    'DROP TABLE IF EXISTS Client;',
    'DROP TABLE IF EXISTS Product;',
    'DROP TABLE IF EXISTS Provider;',
];

function dropEverything(pool: PoolConnection, logs?: boolean): Promise<QueryExecutionState> {
    const createDropEverythingQuery = fs.readFileSync(pathToStarterQueries('drop_everything.sql'), 'utf8');

    return new Promise<QueryExecutionState>((resolve) => {
        pool.beginTransaction((transaction_error) => {
            if (transaction_error) throw { transaction_error };

            pool.query(createDropEverythingQuery, (createDropEverythingQueryError) => {
                if (createDropEverythingQueryError) {
                    pool.rollback(() => {
                        throw { createDropEverythingQueryError };
                    });
                }
            });

            dropTables.forEach((query) => {
                logs && console.log(`Exec: ${query}`);

                pool.query(query, (drop_error) => {
                    if (drop_error) {
                        pool.rollback(() => {
                            throw { drop_error };
                        });
                    }
                });
            });

            pool.query(execDropEverythingQuery, [pool?.config.database], (execDropEverythingQueryError, results) => {
                if (execDropEverythingQueryError) {
                    pool.rollback(() => {
                        throw { execDropEverythingQueryError };
                    });
                }

                const dropRest = results as { query: string }[][];

                dropRest[0].forEach((row) => {
                    logs && console.log(`Exec: ${row.query}`);

                    pool.query(row.query, (drop_error) => {
                        if (drop_error) {
                            pool.rollback(() => {
                                throw { drop_error };
                            });
                        }
                    });
                });
            });

            pool.commit((commit_error) => {
                if (commit_error) {
                    pool.rollback(() => {
                        throw { commit_error };
                    });
                }

                resolve({ ok: true, msg: 'Commit: drop everything' });
            });
        });
    });
};

export { dropEverything };

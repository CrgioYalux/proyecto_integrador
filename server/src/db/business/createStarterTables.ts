import fs from 'fs';
import { pathToStarterQueries } from './helpers';

import type { PoolConnection } from 'mysql';

function createStarterTables(pool: PoolConnection, logs?: boolean): void {
    const query = fs.readFileSync(pathToStarterQueries('tables.sql'), 'utf8');

    pool.beginTransaction((transaction_error) => {
        if (transaction_error) throw { transaction_error };

        pool.query(query, (query_error, results) => {
            if (query_error) {
                pool.rollback(() => {
                    throw { query_error };
                });
            }

            if (logs) {
                console.log(`Exec ${query}`);
                console.log(`Resulted in ${results}`);
            }

            pool.commit((commit_error) => {
                if (commit_error) {
                    pool.rollback(() => {
                        throw { commit_error };
                    });
                }

                console.log('Created tables succesfully!');
            });
        });
    });
};

export { createStarterTables };

import fs from 'fs';
import { pathToStarterQueries } from './helpers';

import type { PoolConnection } from 'mysql';
import type { QueryExecutionState } from './utils';

function createStarterViews(pool: PoolConnection, logs?: boolean): Promise<QueryExecutionState> {
    const query = fs.readFileSync(pathToStarterQueries('views.sql'), 'utf8');
    
    return new Promise<QueryExecutionState>((resolve) => {
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

            });

            pool.commit((commit_error) => {
                if (commit_error) {
                    pool.rollback(() => {
                        throw { commit_error };
                    });
                }

                resolve({ ok: true, msg: `Commit: create views` });
            });
        });
    });
};

export { createStarterViews };

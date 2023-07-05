import type { PoolConnection } from 'mysql';
import type { CheckHealthExpect } from './utils';

const checkStoredProceduresExistQuery: string = `
	SELECT	r.routine_name as stored_procedure_name
	FROM information_schema.routines as r
	WHERE
		r.routine_schema = ?
		AND
		r.routine_type = 'PROCEDURE';
`;

const checkFunctionsExistQuery: string = `
	SELECT	r.routine_name as function_name
	FROM information_schema.routines as r
	WHERE
		r.routine_schema = ?
		AND
		r.routine_type = 'FUNCTION';
`;

const checkTablesExistQuery: string = `
	SELECT t.table_name as table_name
	FROM information_schema.tables t
	WHERE t.table_schema = ?;
`;

function checkHealth(pool: PoolConnection, expect: CheckHealthExpect, logs?: boolean): Promise<{ ok: boolean, msg: string }> {
    return new Promise<{ ok: boolean, msg: string }>((resolve) => {
        pool.query(checkTablesExistQuery, [pool.config?.database], (checkTablesExistQueryError, results) => {
            if (checkTablesExistQueryError) throw { checkTablesExistQueryError };

            const tablesRows = results as { table_name: string }[];
            if (expect.tables && expect.tables.count !== tablesRows.length) {
                // also could make sure that the expect's list matches the rows values
                resolve({ ok: false, msg: 'at tables check' });
                return;
            }

            pool.query(checkStoredProceduresExistQuery, [pool.config?.database], (checkStoredProceduresExistQueryError, results) => {
                if (checkStoredProceduresExistQueryError) throw { checkStoredProceduresExistQueryError };

                const storedProceduresRows = results as { stored_procedure_name: string }[];
                if (expect.storedProcedures && expect.storedProcedures.count !== storedProceduresRows.length) {
                    resolve({ ok: false, msg: 'at stored procedures check' });
                    return;
                }

                pool.query(checkFunctionsExistQuery, [pool.config?.database], (checkFunctionsExistQueryError, results) => {
                    if (checkFunctionsExistQueryError) throw { checkFunctionsExistQueryError };

                    const functionsRows = results as { function_name: string }[];
                    if (expect.functions && expect.functions.count !== functionsRows.length) {
                        resolve({ ok: false, msg: 'at functions check' });
                        return;
                    }
                    
                    // can keep making sure if other resources of the database exist
                    resolve({ ok: true, msg: 'Database resources look fine!' });
                });
            });
        });
    });
};

export { checkHealth };

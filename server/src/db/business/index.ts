import type { PoolConnection } from "mysql";

import { checkHealth } from "./checkHealth";
import { dropEverything } from "./dropEverything";
import { createStarterTables } from './createStarterTables';
import { createStarterStoredProcedures } from "./createStarterProcedures";

import type { CheckHealthExpect } from "./utils";

const expect: CheckHealthExpect = {
    tables: { list: [], count: 11 },
    storedProcedures: { list: [], count: 5 },
};

function setStarterConfig(pool: PoolConnection, freshStart?: boolean, logs?: boolean): void {
    if (freshStart) {
        dropEverything(pool, logs);
        createStarterTables(pool, logs);
        createStarterStoredProcedures(pool, logs);
        return;
    }

    checkHealth(pool, expect)
        .then((checkOp) => {
            if (checkOp.ok) {
                console.log(checkOp.msg);
                return;
            }
            else {
                dropEverything(pool, logs);
                createStarterTables(pool, logs);
                createStarterStoredProcedures(pool, logs);
            }
        })
        .catch(console.error);
};

const BusinessDatabase = {
    setStarterConfig,
};

export default BusinessDatabase;

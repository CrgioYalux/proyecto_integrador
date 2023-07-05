import type { PoolConnection } from "mysql";

import { checkHealth } from "./checkHealth";
import { dropEverything } from "./dropEverything";
import { createStarterTables } from './createStarterTables';
import { createStarterViews } from "./createStarterViews";
import { createStarterStoredProcedures } from "./createStarterProcedures";

import type { CheckHealthExpect } from "./utils";

const expect: CheckHealthExpect = {
    tables: { list: [], count: 12 },
    storedProcedures: { list: [], count: 6 },
    views: { list: [], count: 3 },
};

async function setStarterConfig(pool: PoolConnection, freshStart?: boolean, logs?: boolean): Promise<void> {
    if (freshStart) {
        const dropped = await dropEverything(pool, logs).then(res => res);
        if (dropped.ok) {
            await createStarterTables(pool, logs);
            await createStarterStoredProcedures(pool, logs);
            await createStarterViews(pool, logs);
        }
    }

    const health = await checkHealth(pool, expect).then(res => res);

    if (health.ok) {
        console.log(health.msg);
        return;
    }

    const dropped = await dropEverything(pool, logs).then(res => res);
    if (dropped.ok) {
        await createStarterTables(pool, logs);
        await createStarterStoredProcedures(pool, logs);
        await createStarterViews(pool, logs);
    }
};

const BusinessDatabase = {
    setStarterConfig,
};

export default BusinessDatabase;

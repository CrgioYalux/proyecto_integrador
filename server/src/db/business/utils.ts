type DatabaseResource = 'tables' | 'storedProcedures' | 'functions' | 'views';
type CheckHealthExpect = {
    [key in DatabaseResource]?: {
        count: number,
        list: string[],
    };
};

type QueryExecutionState = { ok: boolean, msg: string };

export type { CheckHealthExpect, QueryExecutionState };

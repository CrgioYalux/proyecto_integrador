type DatabaseResource = 'tables' | 'storedProcedures' | 'functions' | 'views';
type CheckHealthExpect = {
    [key in DatabaseResource]?: {
        count: number,
        list: string[],
    };
};

export type { CheckHealthExpect };

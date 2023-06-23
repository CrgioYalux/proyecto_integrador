type Account = {
    id: number;
    name: string;
    accounts?: Account[];
};

type AccountInClient = Account & {
    code: string;
};

type AccountingPlan = Account[];

export type { Account, AccountInClient, AccountingPlan };

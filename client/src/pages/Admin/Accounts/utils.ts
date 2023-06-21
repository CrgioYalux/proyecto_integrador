type Account = {
    id: number;
    name: string;
    accounts?: Account[];
};

type AccountingPlan = Account[];

export type { Account, AccountingPlan };

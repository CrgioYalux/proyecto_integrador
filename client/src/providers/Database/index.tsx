import { useEffect, useContext, createContext } from 'react';

import { LOCAL_STORAGE_DATABASE_KEY } from './const';

import data from './data.json';

import { useLocalStorage } from '../../hooks/useLocalStorage';

import type { 
    Product,
    Sale,
    Purchase,
    Account,
    SimpleAccountingEntry,
    ComplexAccountingEntry,
    Provider,
    StandaloneMinimunCRUDOperations,
} from './utils';

type DatabaseContextState = {
    products: Product[];
    providers: Provider[];
    transactions: SimpleAccountingEntry[];
    accountingEntries: ComplexAccountingEntry[];
    accounts: Account[];
    purchases: Purchase[];
    sales: Sale[];
};

type DatabaseContextActions = {
    products: Omit<StandaloneMinimunCRUDOperations<Product>, 'getOneById' | 'post'>;
    providers: Omit<StandaloneMinimunCRUDOperations<Provider>, 'getOneById' | 'post'>;
    transactions: Omit<StandaloneMinimunCRUDOperations<SimpleAccountingEntry>, 'getAll' | 'getOneById'>;
    accountingEntries: Omit<StandaloneMinimunCRUDOperations<ComplexAccountingEntry>, 'getOneById' | 'post'>;
    accounts: Omit<StandaloneMinimunCRUDOperations<Account>, 'getOneById' | 'post'>;
    purchases: Omit<StandaloneMinimunCRUDOperations<Purchase>, 'getOneById'>;
    sales: Omit<StandaloneMinimunCRUDOperations<Sale>, 'getOneById'>;
};

type DatabaseContext = {
    actions: DatabaseContextActions;
};

const Context = createContext<DatabaseContext>({ } as DatabaseContext);

interface ExecModeContextProviderProps {
    children: React.ReactNode;
};

const DatabaseContextProvider: React.FC<ExecModeContextProviderProps> = ({ children }) => {
    const localStorage = useLocalStorage<DatabaseContextState>({
        products: [],
        providers: data.providers as Provider[],
        transactions: [],
        accountingEntries: [],
        accounts: [],
        purchases: data.purchases as Purchase[],
        sales: [],
    });

    useEffect(() => {
        localStorage.operation.GetItem(LOCAL_STORAGE_DATABASE_KEY);
    }, []);

    const actions: DatabaseContextActions = {
        products: {
            getAll: () => localStorage.state.products,
        },
        providers: {
            getAll: () => localStorage.state.providers,
        },
        transactions: {
            post: (transaction: SimpleAccountingEntry) => {
                localStorage.operation.SetItem(
                    LOCAL_STORAGE_DATABASE_KEY,
                    JSON.stringify({ ...localStorage.state, transactions: [...localStorage.state.transactions, transaction]})
                );
                return true;
            },
        },
        accountingEntries: {
            getAll: () => localStorage.state.accountingEntries,
        },
        accounts: {
            getAll: () => localStorage.state.accounts,
        },
        purchases: {
            getAll: () => localStorage.state.purchases,
            post: (purchase: Purchase) => {
                localStorage.operation.SetItem(
                    LOCAL_STORAGE_DATABASE_KEY,
                    JSON.stringify({ ...localStorage.state, purchases: [...localStorage.state.purchases, purchase]})
                );
                return true;
            },
        },
        sales: {
            getAll: () => localStorage.state.sales,
            post: (sale: Sale) => {
                localStorage.operation.SetItem(
                    LOCAL_STORAGE_DATABASE_KEY,
                    JSON.stringify({ ...localStorage.state, sales: [...localStorage.state.sales, sale]})
                );
                return true;
            },
        },
    };

    const value: DatabaseContext = { actions };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default DatabaseContextProvider;
export const useDatabase = () => useContext<DatabaseContext>(Context);

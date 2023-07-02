import { useReducer } from "react";

enum LocalStorageOperationType {
    GetItem = 0,
    SetItem,
    RemoveItem
};

interface LocalStorageOperation {
    GetItem: (key: string) => void; 
    SetItem: (key: string, value: string) => void;
    RemoveItem: (key: string) => void;
};

interface LocalStorageAction {
    type: LocalStorageOperationType;
    key?: string;
    value?: string;
};

// type LocalStorageState<T> = T | null;
type LocalStorageState<T> = T;

const GetItemCase = <T,>(state: LocalStorageState<T>, action: LocalStorageAction): LocalStorageState<T> => {
    const { key } = action;
    if (key === undefined) return state;
    const item = window.localStorage.getItem(key);
    if (item === null) {
        window.localStorage.setItem(key, JSON.stringify(state));
        return state;
    };
    try {
        const parse = JSON.parse(item);
        return parse;
    }
    catch (error) {
        console.error(error);
        return state;
    };
};

const SetItemCase = <T,>(state: LocalStorageState<T>, action: LocalStorageAction): LocalStorageState<T> => {
    const { key, value } = action;
    if (key === undefined || value === undefined) return state;
    try {
        window.localStorage.setItem(key, value);
        const parse = JSON.parse(value);
        return parse;
    }
    catch (error) {
        console.error(error);
        return state;
    }
};

const RemoveItemCase = <T,>(state: LocalStorageState<T>, action: LocalStorageAction): LocalStorageState<T> => {
    const { key } = action;
    if (key === undefined) return state;
    window.localStorage.removeItem(key);
    return state;
};

const reducer = <T,>(state: T, action: LocalStorageAction) => {
    switch(action.type) {
        case LocalStorageOperationType.GetItem:
            return GetItemCase(state, action);
        case LocalStorageOperationType.SetItem:
            return SetItemCase(state, action);
        case LocalStorageOperationType.RemoveItem:
            return RemoveItemCase(state, action);
        default:
            return state;
    }
};

interface useLocalStorageReturns<T> {
    state: LocalStorageState<T>;
    operation: LocalStorageOperation;
};

type Reducer<S, A> = (state: S, action: A) => S;

const useLocalStorage = <T,>(initialState: T): useLocalStorageReturns<T> => {
    const [state, dispatch] = useReducer<Reducer<LocalStorageState<T>, LocalStorageAction>>(reducer, initialState);

    const GetItem = (key: string) => {
        dispatch({type: LocalStorageOperationType.GetItem, key});
    };

    const SetItem = (key: string, value: string) => {
        dispatch({type: LocalStorageOperationType.SetItem, key, value});
    };

    const RemoveItem = (key: string) => {
        dispatch({type: LocalStorageOperationType.RemoveItem, key});
    };

    return {
        state,
        operation: {
            GetItem,
            SetItem,
            RemoveItem
        }
    };
};

export type {
    LocalStorageOperationType,
    LocalStorageOperation,
    LocalStorageAction,
    LocalStorageState,
    useLocalStorageReturns,
    Reducer
};

export { useLocalStorage };

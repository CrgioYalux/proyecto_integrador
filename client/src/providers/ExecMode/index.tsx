import { useState, useContext, createContext } from 'react';

import { ExecMode } from './utils';
import { getExecMode } from './helpers';

type ExecModeContext = {
    execMode: ExecMode;
};

const Context = createContext<ExecModeContext>({ execMode: ExecMode.StandAlone });

interface ExecModeContextProviderProps {
    children: React.ReactNode;
};

const ExecModeContextProvider: React.FC<ExecModeContextProviderProps> = ({ children }) => {
    const [execMode] = useState<ExecMode>(() => getExecMode());

    const value: ExecModeContext = {
        execMode,
    };

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
};

export default ExecModeContextProvider;
export const useExecMode = () => useContext<ExecModeContext>(Context);

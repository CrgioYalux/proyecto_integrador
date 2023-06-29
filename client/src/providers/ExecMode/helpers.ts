import { ExecMode } from "./utils";

const getExecMode = (): ExecMode => {
    const execMode = process.env.EXEC_MODE;
    if (!execMode) return ExecMode.StandAlone;
    return execMode as ExecMode;
};

export { getExecMode };

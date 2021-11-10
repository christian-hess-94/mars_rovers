import { createContext, useContext, useState } from "react";
import { Rover } from "./rovers.context";

export interface LogContextData {
  logs: string[];
  addLog: (l: string, r: Rover, p: number) => void;
}

const DEFAULT_LOG_CONTEXT_DATA: LogContextData = {
  logs: [],
  addLog: () => null,
};
const LogContext = createContext<LogContextData>(DEFAULT_LOG_CONTEXT_DATA);

const { Provider } = LogContext;

export const LogProvider: React.FC = ({ children }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const addLog = (l: string, r: Rover, p: number) => {
    const newLogs = logs;
    newLogs.push(
      `[Rover ${p}] (${r.current.x},${r.current.y},${r.lookDirection}) ${l}`
    );
    console.log({ newLogs });
    setLogs(logs);
  };
  return <Provider value={{ logs, addLog }}>{children}</Provider>;
};

const useLog = (): LogContextData => {
  const context = useContext(LogContext);
  if (!context) throw new Error("useLog must be used within <LogProvider>");
  return context;
};

export default useLog;

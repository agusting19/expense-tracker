import { createContext, ReactNode } from "react";

export const Context = createContext<undefined | any>(undefined);

interface ContextProps {
  children: ReactNode;
}

const GlobalProvider = ({ children }: ContextProps) => {
  return <Context.Provider value={{total: 100}}>{children}</Context.Provider>;
};

export default GlobalProvider;

import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const defaultState = {
  cart: new Map(),
  loading: false,
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ defaultState }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);

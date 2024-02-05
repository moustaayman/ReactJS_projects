import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
export default AppProvider;

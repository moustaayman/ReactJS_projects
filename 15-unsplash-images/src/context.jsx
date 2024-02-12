import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

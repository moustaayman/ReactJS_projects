import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchText, setSearchText] = useState("happy");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
  };
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, setSearchText, searchText }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

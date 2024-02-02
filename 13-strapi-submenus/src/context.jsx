import { createContext, useState } from "react";

const GlobalContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppProvider;

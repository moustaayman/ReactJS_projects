import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };
  const openModal = () => {
    setisModalOpen(true);
  };
  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

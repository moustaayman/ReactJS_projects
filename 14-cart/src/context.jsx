import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { CLEAR_CART } from "./actions";
import cartItems from "./data";

const AppContext = createContext();

const defaultState = {
  cart: new Map(cartItems.map((item) => [item.id, item])),
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);

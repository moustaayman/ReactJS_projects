import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { CLEAR_CART, DECREASE, INCREASE, REMOVE_ITEM } from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";

const AppContext = createContext();

const defaultState = {
  cart: new Map(cartItems.map((item) => [item.id, item])),
  loading: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotals(state.cart);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);

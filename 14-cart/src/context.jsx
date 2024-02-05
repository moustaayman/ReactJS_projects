import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_CART,
  INCREASE,
  LOADING,
  REMOVE_ITEM,
} from "./actions";
import cartItems from "./data";
import { getTotals } from "./utils";
const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
  cart: new Map(),
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
  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const fetchedCart = await response.json();
    dispatch({ type: DISPLAY_CART, payload: { fetchedCart } });
  };
  useEffect(() => {
    fetchData();
  }, []);
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

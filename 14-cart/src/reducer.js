import {
  CLEAR_CART,
  DECREASE,
  DISPLAY_CART,
  INCREASE,
  LOADING,
  REMOVE_ITEM,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
    case REMOVE_ITEM: {
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    }
    case INCREASE: {
      const newCart = new Map(state.cart);
      const item = newCart.get(action.payload.id);
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(item.id, newItem);
      return { ...state, cart: newCart };
    }
    case DECREASE: {
      const newCart = new Map(state.cart);
      const item = newCart.get(action.payload.id);

      if (item.amount == 1) {
        newCart.delete(item.id);
        return { ...state, cart: newCart };
      }

      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(item.id, newItem);
      return { ...state, cart: newCart };
    }
    case LOADING:
      return { ...state, loading: true };

    case DISPLAY_CART: {
      const ourCart = action.payload.fetchedCart;
      const newCart = new Map(ourCart.map((item) => [item.id, item]));
      return { ...state, loading: false, cart: newCart };
    }
    default:
      throw new Error(`oops`);
  }
};

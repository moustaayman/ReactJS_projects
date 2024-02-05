import { CLEAR_CART, DECREASE, INCREASE, REMOVE_ITEM } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
      break;
    case REMOVE_ITEM: {
      const newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
      break;
    }
    case INCREASE: {
      const newCart = new Map(state.cart);
      const item = newCart.get(action.payload.id);
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(item.id, newItem);
      return { ...state, cart: newCart };
      break;
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
      break;
    }

    default:
      throw new Error(`oops`);
      break;
  }
};

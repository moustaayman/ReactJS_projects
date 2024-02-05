import { CLEAR_CART, REMOVE_ITEM } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: new Map() };
      break;

    default:
      throw new Error(`oops`);
      break;
  }
};

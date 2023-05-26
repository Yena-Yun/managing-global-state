import { createContext } from 'react';

const CartContext = createContext({
  items: {},
  setItems: () => null,
});

export default CartContext;
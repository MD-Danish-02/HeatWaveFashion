// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';

const saveToLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.cart.items));
};


const loadFromLocalStorage = () => {
  try {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return {
      cart: { items: cartItems || [] },
    };
  } catch (e) {
    return {
      cart: { items: [] },
    };
  }
};


const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: userReducer,
  },
  preloadedState: loadFromLocalStorage(),
});


store.subscribe(() => saveToLocalStorage(store.getState()));

export default store
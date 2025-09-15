import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../redux_online_store/src/features/cartSlice";
import modalReducer from "../../redux_online_store/src/features/modalSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
export default store;

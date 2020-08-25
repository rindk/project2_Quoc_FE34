import { configureStore } from "@reduxjs/toolkit";
import productsListReducer from "./reducer/productsList";

export default configureStore({
  reducer: {
    productsList: productsListReducer,
  },
});

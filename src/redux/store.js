import { configureStore } from "@reduxjs/toolkit";
import productsListReducer from "./reducer/productsList";
import productsHotReducer from "./reducer/productsHot";
import productsTopSaleReducer from "./reducer/productsTopSale";
import productItemReducer from "./reducer/productItem";
import cartStorageReducer from "./reducer/cartStorage";
import loginStatusReducer from "./reducer/loginStatus";
import tokenReducer from "./reducer/token";

export default configureStore({
  reducer: {
    productsList: productsListReducer,
    productsHot: productsHotReducer,
    productsTopSale: productsTopSaleReducer,
    productItem: productItemReducer,
    cartStorage: cartStorageReducer,
    loginStatus: loginStatusReducer,
    token: tokenReducer,
  },
});

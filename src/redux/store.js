import { configureStore } from "@reduxjs/toolkit";
import productsListReducer from "./reducer/productsList";
import productsCartReducer from "./reducer/productsCart";
import productsHotReducer from "./reducer/productsHot";
import productsTopSaleReducer from "./reducer/productsTopSale";
import productItemReducer from "./reducer/productItem";
import loginStatusReducer from "./reducer/loginStatus";
import tokenReducer from "./reducer/token";
import queryParamsReducer from "./reducer/queryParams";

export default configureStore({
  reducer: {
    productsList: productsListReducer,
    productsCart: productsCartReducer,
    productsHot: productsHotReducer,
    productsTopSale: productsTopSaleReducer,
    productItem: productItemReducer,
    loginStatus: loginStatusReducer,
    token: tokenReducer,
    queryParams: queryParamsReducer,
  },
});

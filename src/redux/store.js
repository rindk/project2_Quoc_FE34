import { configureStore } from "@reduxjs/toolkit";
import productsListReducer from "./reducer/productsList";
import productsCartReducer from "./reducer/productsCart";
import productsHotReducer from "./reducer/productsHot";
import productsTopSaleReducer from "./reducer/productsTopSale";
import productItemReducer from "./reducer/productItem";
import loginStatusReducer from "./reducer/loginStatus";
import tokenReducer from "./reducer/token";
import queryParamsReducer from "./reducer/queryParams";
import orderListReducer from "./reducer/orderList";
import allProductReducer from "./reducer/allProduct";
import allOrderReducer from "./reducer/allOrder";
import allUserReducer from "./reducer/allUser";
import userInfoReducer from "./reducer/userInfo";
import orderInfoReducer from "./reducer/orderInfo";

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
    orderList: orderListReducer,
    allProduct: allProductReducer,
    allOrder: allOrderReducer,
    allUser: allUserReducer,
    userInfo: userInfoReducer,
    orderInfo: orderInfoReducer,
  },
});

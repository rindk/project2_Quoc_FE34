import { createSlice } from "@reduxjs/toolkit";

export const productsCart = createSlice({
  name: "productsCart",
  initialState: {
    value: [],
  },
  reducers: {
    getProductsCart: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getProductsCart } = productsCart.actions;

export const fetchProductsCart = (token) => (dispatch) => {
  const cart = token === null ? [] : token[0].cart;
  const params =
    cart.length === 0
      ? "id=null"
      : cart.reduce((final, el) => (final += `&id=${el.productID}`), "");
  fetch(process.env.REACT_APP_SV_PRODUCTS + `?${params}`)
    .then((res) => res.json())
    .then((data) => {
      data.forEach(
        (el) => (el["qty"] = cart.find((elem) => elem.productID === el.id).qty)
      );
      dispatch(getProductsCart(data));
    });
};

export default productsCart.reducer;

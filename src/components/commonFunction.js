import store from "../redux/store";
import { updateToken } from "../redux/reducer/token";
import { checkLoginStt } from "../redux/reducer/loginStatus";

// Open/Close Modal
export const openModal = () => {
  document.querySelector(".modal").classList.add("active");
};

export const closeModal = () => {
  document.querySelector(".modal").classList.remove("active");
};

// Validate email, password
export const validateUser = (user) => {
  const regEmail = /^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
  const regPass = /^(?=[\w]).{6,}$/gm;
  return regEmail.test(user.email)
    ? regPass.test(user.password)
      ? "ok"
      : "Đặt lại mật khẩu"
    : "Đặt lại email";
};

// Check user is available or not
export const availableEmail = async (email) => {
  return await fetch(process.env.REACT_APP_SV_USERS + "?email=" + email)
    .then((res) => res.json())
    .then((data) => {
      return data.length === 0 ? true : false;
    });
};

// Sign up new account
export const signupNewAcc = async (user) => {
  const data = {
    type: "user",
    firstName: user.fname,
    lastName: user.lname,
    email: user.email,
    password: user.password,
    address: "",
    city: "",
    phone: "",
    cart: [],
  };
  await fetch(process.env.REACT_APP_SV_USERS, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch(
    () => (window.location.href = process.env.REACT_APP_HOST + "/error")
  );
  alert("Bạn đã đăng ký thành công");
  return (window.location.href = process.env.REACT_APP_HOST + "/login");
};

// Check user login
export const checkLogin = (user) => {
  return fetch(process.env.REACT_APP_SV_LOGIN, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: user.email, password: user.passwrod }),
  });
};

// Define slider button
export const clickSlider = (isSlider, value) => {
  const slider =
    isSlider === "hot"
      ? document.querySelector("#slider_hot")
      : isSlider === "top"
      ? document.querySelector("#slider_top")
      : null;
  const slide = [...slider.querySelectorAll(".slide")];
  const activedSlide = slide.findIndex((el) => el.classList.contains("active"));
  if (value === "left" && activedSlide === 0) return null;
  if (value === "right" && activedSlide >= 2) return null;
  if (value === "right") {
    slider.style.transform = `translateX(${(-(activedSlide + 1) * 100) / 6}%)`;
    slide[activedSlide].classList.remove("active");
    slide[activedSlide + 1].classList.add("active");
  }
  if (value === "left") {
    slider.style.transform = `translateX(${(-(activedSlide - 1) * 100) / 6}%)`;
    slide[activedSlide].classList.remove("active");
    slide[activedSlide - 1].classList.add("active");
  }
};

// add rating for product
export const addRating = (userID, productItem, point, isRated) => {
  const url = process.env.REACT_APP_SV_PRODUCTS + `/${productItem.id}`;
  const data =
    isRated === -1
      ? {
          ...productItem,
          rating: [...productItem.rating, { userID: userID, point: point }],
        }
      : {
          ...productItem,
          rating: [
            ...productItem.rating.filter((el, i) => i !== isRated),
            { userID: userID, point: point },
          ],
        };
  fetch(url, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return window.location.reload();
};

// add to cart for user
export const addToCart = async (id, qty) => {
  const state = store.getState();
  const token = state.token.value;
  const loginStatus = state.loginStatus.value;

  if (!loginStatus) return openModal();
  const cart = token[0].cart;
  const checkProduct = cart.findIndex((el) => el.productID === id);
  const newCart =
    cart.length === 0
      ? [{ productID: id, qty: qty }]
      : checkProduct === -1
      ? [...cart, { productID: id, qty: qty }]
      : [
          ...cart.filter((el) => el.productID !== id),
          { productID: id, qty: cart[checkProduct].qty + qty },
        ];
  const url = process.env.REACT_APP_SV_PROFILE + `/${token[0].id}`;
  const data = { ...token[0], cart: newCart };
  return await fetch(url, {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => store.dispatch(updateToken([data])));
};

// Sign out
export const signout = () => {
  localStorage.clear();
  store.dispatch(updateToken(null));
  store.dispatch(checkLoginStt());
  return (window.location.href = "/");
};

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
export const checkLogin = async (user) => {
  console.log(
    process.env.REACT_APP_SV_USERS +
      `?email=${user.email}&password=${user.password}`
  );
  return await fetch(
    process.env.REACT_APP_SV_USERS +
      `?email=${user.email}&password=${user.password}`
  ).then((res) => res.json());
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

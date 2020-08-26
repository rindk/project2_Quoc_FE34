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

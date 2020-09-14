import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../../../redux/reducer/allUser";
import { fetchUserInfo } from "../../../redux/reducer/userInfo";

function User() {
  const dispatch = useDispatch();
  const allUser = useSelector((state) => state.allUser.value);
  const [users, setUsers] = useState(allUser);

  // Load all product
  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);
  useEffect(() => {
    setUsers(allUser);
  }, [allUser]);

  const openModal = (id) => {
    const modal = document.querySelector(".ad-user__modal");
    modal.classList.remove("hide");
    dispatch(fetchUserInfo(id));
  };
  const closeModal = () => {
    const modal = document.querySelector(".ad-user__modal");
    modal.classList.add("hide");
  };
  const updateUser = (userInfo) => {
    const url = process.env.REACT_APP_SV_PROFILE + `/${userInfo.id}`;
    fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then(() => dispatch(fetchAllUser()));
    closeModal();
  };
  const deleteUser = (id) => {
    const url1 = process.env.REACT_APP_SV_USERS + `/${id}`;
    const url2 = process.env.REACT_APP_SV_PROFILE + `/${id}`;
    fetch(url1, {
      method: "DELETE",
    });
    fetch(url2, {
      method: "DELETE",
    }).then(() => dispatch(fetchAllUser()));
  };

  return (
    <main className="ad-main">
      <UserModal closeModal={closeModal} updateUser={updateUser} />
      <div className="ad-user">
        <h3 className="header">User Management</h3>
        <section className="ad-user__table shadow">
          <div className="ad-user__row title">
            <p>ID</p>
            <p>FIRST NAME</p>
            <p>TYPE</p>
            <p>EMAIL</p>
            <p>PHONE</p>
            <p>ADDRESS</p>
            <p>CITY</p>
            <p>DELETE</p>
          </div>
          {users.map((user) =>
            user.id === 1 ? null : (
              <UserDetail
                key={user.id}
                user={user}
                openModal={openModal}
                deleteUser={deleteUser}
              />
            )
          )}
        </section>
      </div>
    </main>
  );
}

const UserDetail = ({ user, openModal, deleteUser }) => {
  return (
    <div className="ad-user__row">
      <p>{user.id}</p>
      <p className="name">
        <span>{user.lastName + " " + user.firstName}</span>
        <button className="edit" onClick={() => openModal(user.id)}>
          Edit
        </button>
      </p>
      <p>{user.type}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
      <p>{user.city}</p>
      <p>
        <button className="delete" onClick={() => deleteUser(user.id)}>
          ✕
        </button>
      </p>
    </div>
  );
};

const UserModal = ({ closeModal, updateUser }) => {
  const userModal = useSelector((state) => state.userInfo.value);
  const [userInfo, setUserInfo] = useState(userModal);

  useEffect(() => {
    setUserInfo({ ...userModal });
  }, [userModal]);

  // handle input
  const handleInput = (e) => {
    const target = e.target;
    setUserInfo({ ...userInfo, [target.name]: target.value });
  };
  return (
    <section className="ad-user__modal hide">
      <div className="ad-user__modal-inner">
        <div className="ad-user__modal-content">
          <div>
            <img src="assets/avt2.png" alt="avatar" />
          </div>
          <div className="ad-user__modal-detail">
            <label>
              <span>Tên</span>
              <input
                type="text"
                name="firstName"
                value={userInfo.firstName}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Họ & tên đệm</span>
              <input
                type="text"
                name="lastName"
                value={userInfo.lastName}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Address</span>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>City</span>
              <input
                type="text"
                name="city"
                value={userInfo.city}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleInput}
              />
            </label>
          </div>
        </div>
        <div className="ad-user__modal-btn">
          <button className="btn" onClick={() => updateUser(userInfo)}>
            UPDATE
          </button>
          <button className="btn" onClick={closeModal}>
            CANCEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default User;

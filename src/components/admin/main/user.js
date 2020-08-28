import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUser } from "../../../redux/reducer/allUser";

function User() {
  const allUser = useSelector((state) => state.allUser.value);
  const dispatch = useDispatch();

  // Load all product
  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);
  return (
    <main className="ad-main">
      <div className="ad-user">
        <h3 className="header">User Management</h3>
        <section className="ad-user__table shadow"></section>
      </div>
    </main>
  );
}

export default User;

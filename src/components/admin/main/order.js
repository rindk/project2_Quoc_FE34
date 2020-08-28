import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrder } from "../../../redux/reducer/allOrder";

function Order() {
  const allOrer = useSelector((state) => state.allOrder.value);
  const dispatch = useDispatch();

  // Load all product
  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);
  return (
    <main className="ad-main">
      <div className="ad-order">
        <h3 className="header">Order Management</h3>
        <section className="ad-order__table shadow"></section>
      </div>
    </main>
  );
}

export default Order;

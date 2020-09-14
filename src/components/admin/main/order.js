import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllOrder } from "../../../redux/reducer/allOrder";
import { fetchOrderInfo } from "../../../redux/reducer/orderInfo";

function Order() {
  const dispatch = useDispatch();
  const allOrer = useSelector((state) => state.allOrder.value);
  const [orders, setOrders] = useState(allOrer);

  // Load all product
  useEffect(() => {
    dispatch(fetchAllOrder());
  }, [dispatch]);
  useEffect(() => {
    setOrders(allOrer);
  }, [allOrer]);

  const openModal = (id) => {
    const modal = document.querySelector(".ad-order__modal");
    modal.classList.remove("hide");
    dispatch(fetchOrderInfo(id));
  };
  const closeModal = () => {
    const modal = document.querySelector(".ad-order__modal");
    modal.classList.add("hide");
  };
  const updateOrder = (orderInfo) => {
    const url = process.env.REACT_APP_SV_ORDERS + `/${orderInfo.id}`;
    fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    }).then(() => dispatch(fetchAllOrder()));
    closeModal();
  };
  const deleteOrder = (id) => {
    const url = process.env.REACT_APP_SV_ORDERS + `/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then(() => dispatch(fetchAllOrder()));
  };
  return (
    <main className="ad-main">
      <OrderModal closeModal={closeModal} updateOrder={updateOrder} />
      <div className="ad-order">
        <h3 className="header">Order Management</h3>
        <section className="ad-order__table shadow">
          <div className="ad-order__row title">
            <p>ID</p>
            <p>NAME (UserID)</p>
            <p>PHONE</p>
            <p>ADDRESS</p>
            <p>CITY</p>
            <p>TOTAL($)</p>
            <p>ORDER DATE</p>
            <p>STATUS</p>
            <p>DELETE</p>
          </div>
          {orders.map((order) => (
            <OrderDetail
              key={order.id}
              order={order}
              openModal={openModal}
              deleteOrder={deleteOrder}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

const OrderDetail = ({ order, openModal, deleteOrder }) => {
  return (
    <div className="ad-order__row">
      <p>{order.id}</p>
      <p className="name">
        <span>{order.name + ` (${order.userID})`}</span>
        <button className="edit" onClick={() => openModal(order.id)}>
          Edit
        </button>
      </p>
      <p>{order.phone}</p>
      <p>{order.address}</p>
      <p>{order.city}</p>
      <p>{order.total}</p>
      <p>{order.orderDate}</p>
      <p>{order.status}</p>
      <p>
        <button className="delete" onClick={() => deleteOrder(order.id)}>
          ✕
        </button>
      </p>
    </div>
  );
};

const OrderModal = ({ closeModal, updateOrder }) => {
  const orderModal = useSelector((state) => state.orderInfo.value);
  const [orderInfo, setOrderInfo] = useState(orderModal);

  useEffect(() => {
    setOrderInfo({ ...orderModal });
  }, [orderModal]);

  // handle input
  const handleInput = (e) => {
    const target = e.target;
    setOrderInfo({ ...orderInfo, [target.name]: target.value });
  };
  return (
    <section className="ad-order__modal hide">
      <div className="ad-order__modal-inner">
        <div className="ad-order__modal-content">
          <div>
            <img src="assets/avt2.png" alt="avatar" />
          </div>
          <div className="ad-order__modal-detail">
            <label>
              <span>Tên</span>
              <input
                type="text"
                name="name"
                value={orderInfo.name}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>userID</span>
              <input
                type="number"
                name="userID"
                value={orderInfo.userID}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>phone</span>
              <input
                type="tel"
                name="phone"
                value={orderInfo.phone}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Address</span>
              <input
                type="text"
                name="address"
                value={orderInfo.address}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>City</span>
              <input
                type="text"
                name="city"
                value={orderInfo.city}
                onChange={handleInput}
              />
            </label>
            <label>
              <span>Status</span>
              <select
                name="status"
                value={orderInfo.status}
                onChange={handleInput}
              >
                <option value="ordered">Ordered</option>
                <option value="shipped">Shipped</option>
                <option value="canceled">Canceled</option>
              </select>
            </label>
            <label>
              <span>Total ($)</span>
              <p>{orderInfo.total}</p>
            </label>
            <label>
              <span>Order Date</span>
              <p>{orderInfo.orderDate}</p>
            </label>
            <label>
              <span>Cart</span>
              <div>
                {orderInfo.cart.map((el) => (
                  <>
                    <p>
                      Productid: {el.productID} - Quantity: {el.qty}
                    </p>
                  </>
                ))}
              </div>
            </label>
          </div>
        </div>
        <div className="ad-order__modal-btn">
          <button className="btn" onClick={() => updateOrder(orderInfo)}>
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

export default Order;

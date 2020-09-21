import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderList } from "../../redux/reducer/orderList";

function Order() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const loginStatus = useSelector((state) => state.loginStatus.value);
  const orderList = useSelector((state) => state.orderList.value);

  useEffect(() => {
    const user = token === null || token.length === 0 ? 0 : token[0].id;
    dispatch(fetchOrderList(user));
  }, [dispatch, token]);

  return (
    <main className="order-main">
      <div className="breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t("menu.home")}</Link>
          <span>/</span>
          <p>{t("menu.order")}</p>
        </div>
      </div>
      {!loginStatus ? (
        <div className="container">
          <div className="login">
            Bạn chưa đăng nhập
            <Link className="link" to="/login">
              {t("header.login")}
            </Link>
          </div>
        </div>
      ) : (
        <section className="order">
          <div className="container">
            <div className="section__arrow--title">
              <h1 className="section__arrow--header">{t("title.order")}</h1>
              <img
                className="section__arrow--icon"
                src="assets/images/decor/2.png"
                alt="icon"
              />
            </div>
            <div className="order__inner">
              <div className="order__row">
                <h5>STT</h5>
                <h5>Tên khách hàng / Ngày đặt hàng</h5>
                <h5>Số SP</h5>
                <h5>Tổng tiền</h5>
                <h5>Địa chỉ giao hàng</h5>
                <h5>Thành phố</h5>
                <h5>Tình trạng</h5>
              </div>
              {orderList.length === 0 ? (
                <div>Bạn không có đơn đặt hàng nào</div>
              ) : (
                orderList.map((order, index) => (
                  <div className="order__row" key={index}>
                    <p>{index + 1}</p>
                    <div>
                      <p className="order__name">{order.name.toUpperCase()}</p>
                      <p className="order__name">{order.orderDate}</p>
                    </div>
                    <p>{order.cart.reduce((qty, el) => (qty += el.qty), 0)}</p>
                    <p className="price">
                      {order.total}
                      <span>$</span>
                    </p>
                    <p>{order.address}</p>
                    <p>{order.city}</p>
                    <p className="order__status">{order.status}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Order;

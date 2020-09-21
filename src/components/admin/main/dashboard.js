import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChartIncome from "./chart-income";
import ChartOrder from "./chart-order";
import ChartPie from "./chart-pie";
import ChartDoughnut from "./chart-doughnut";
import { fetchAllOrder } from "../../../redux/reducer/allOrder";
import { fetchAllUser } from "../../../redux/reducer/allUser";
import { fetchAllProduct } from "../../../redux/reducer/allProduct";

function Dashboard() {
  const user = useSelector((state) => state.allUser.value);
  const product = useSelector((state) => state.allProduct.value);
  const order = useSelector((state) => state.allOrder.value);
  const dispatch = useDispatch();

  // Load all info for statics chart
  useEffect(() => {
    dispatch(fetchAllOrder());
    dispatch(fetchAllUser());
    dispatch(fetchAllProduct());
  }, [dispatch]);

  return (
    <main className="ad-main">
      <div className="ad-dashboard">
        <h3 className="header">DASHBOARD</h3>
        <section className="summary">
          <aside className="card shadow red">
            <div className="card__content">
              <h4 className="red-text">TOTAL INCOME</h4>
              <p>
                ${" "}
                {order.reduce(
                  (total, el) =>
                    el.status !== "canceled" ? (total += el.total) : total,
                  0
                )}
              </p>
            </div>
            <i className="fas fa-dollar-sign"></i>
          </aside>
          <aside className="card shadow blue">
            <div className="card__content">
              <h4 className="blue-text">TOTAL PRODUCT</h4>
              <p>{product.length}</p>
            </div>
            <i className="fas fa-warehouse"></i>
          </aside>

          <aside className="card shadow green">
            <div className="card__content">
              <h4 className="green-text">TOTAL ORDER</h4>
              <p>{order.length}</p>
            </div>
            <i className="fas fa-briefcase"></i>
          </aside>
          <aside className="card shadow orange">
            <div className="card__content">
              <h4 className="orange-text">TOTAL USER</h4>
              <p>{user.length}</p>
            </div>
            <i className="fas fa-users-cog"></i>
          </aside>
        </section>
        <section className="chart">
          <div className="chart__inner shadow red-text">
            <h4>Monthly income 2020</h4>
            <ChartIncome order={order} />
          </div>
          <div className="chart__inner shadow blue-text">
            <h4>Monthly order 2020</h4>
            <ChartOrder order={order} />
          </div>
          <div className="chart__inner shadow green-text">
            <h4>Percentage of order</h4>
            <ChartPie order={order} />
          </div>
          <div className="chart__inner shadow orange-text">
            <h4>Percentage of product (Red Wines / White Wines)</h4>
            <ChartDoughnut product={product} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;

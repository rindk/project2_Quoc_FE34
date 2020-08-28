import React, { useEffect } from "react";
import Chart from "chart.js";

function ChartPie({ order }) {
  useEffect(() => {
    const ctx = document.getElementById("pie").getContext("2d");
    const orderPercentage = (status) =>
      order.filter((el) => el.status === status).length;

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Ordered", "Canceled", "Shipped"],
        datasets: [
          {
            label: "Percentage of Order",
            data: [
              orderPercentage("ordered"),
              orderPercentage("canceled"),
              orderPercentage("shipped"),
            ],
            backgroundColor: ["#ffc107", "#dc3545", "#28a745"],
            borderColor: Array(3).fill("whitesmoke"),
            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: {
          display: true,
        },
        animation: {
          duration: 2000,
        },
      },
    });
  }, [order]);

  return <canvas id="pie"></canvas>;
}

export default ChartPie;

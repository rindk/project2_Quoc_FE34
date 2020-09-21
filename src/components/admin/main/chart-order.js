import React, { useEffect } from "react";
import Chart from "chart.js";

function ChartOrder({ order }) {
  useEffect(() => {
    const ctx = document.getElementById("order").getContext("2d");
    const monthlyOrder = (month) =>
      order.filter(
        (el) => el.orderDate.slice(-7, -5).replace(/\//, "") === month
      ).length;

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
          {
            label: "Number of Order",
            data: [
              monthlyOrder("5"),
              monthlyOrder("6"),
              monthlyOrder("7"),
              monthlyOrder("8"),
              monthlyOrder("9"),
            ],
            backgroundColor: Array(5).fill("rgba(204, 204, 255, 0.6)"),
            borderColor: Array(5).fill("rgba(50, 50, 255, 1)"),
            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        animation: {
          duration: 2000,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [order]);

  return <canvas id="order"></canvas>;
}

export default ChartOrder;

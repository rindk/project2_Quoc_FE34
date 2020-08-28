import React, { useEffect } from "react";
import Chart from "chart.js";

function ChartIncome({ order }) {
  useEffect(() => {
    const ctx = document.getElementById("income").getContext("2d");
    const monthlyIncome = (month) =>
      order.reduce(
        (income, el) =>
          el.orderDate.slice(-7, -5).replace(/\//, "") === month &&
          el.status !== "canceled"
            ? (income += el.total)
            : income,
        0
      );

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
          {
            label: "Income",
            data: [
              monthlyIncome("5"),
              monthlyIncome("6"),
              monthlyIncome("7"),
              monthlyIncome("8"),
              monthlyIncome("9"),
            ],
            backgroundColor: Array(5).fill("rgba(255, 204, 204, 0.6)"),
            borderColor: Array(5).fill("rgba(255, 50, 50, 1)"),
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
    Chart.defaults.global.elements.point.borderWidth = 2;
  }, [order]);

  return <canvas id="income"></canvas>;
}

export default ChartIncome;

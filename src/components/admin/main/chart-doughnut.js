import React, { useEffect } from "react";
import Chart from "chart.js";

function ChartDoughnut({ product }) {
  useEffect(() => {
    const ctx = document.getElementById("doughnut").getContext("2d");
    const productPercentage = (type) =>
      product.filter((el) => el.type === type).length;

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [
          "Chardonnay",
          "Riesling",
          "Pinot Grigio",
          "Syrah",
          "Zinfandel",
          "Merlot",
        ],
        datasets: [
          {
            label: "Percentage of Order",
            data: [
              productPercentage("Chardonnay"),
              productPercentage("Riesling"),
              productPercentage("Pinot Grigio"),
              productPercentage("Syrah"),
              productPercentage("Zinfandel"),
              productPercentage("Merlot"),
            ],
            backgroundColor: [
              "#bd1e24",
              "#e97600",
              "#f6c700",
              "#5da039",
              "#0067a7",
              "#964f8e",
            ],
            borderColor: [
              "#ffcb05",
              "#ffcb05",
              "#ffcb05",
              "#9c0001",
              "#9c0001",
              "#9c0001",
            ],
            borderWidth: 3,
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
  }, [product]);

  return <canvas id="doughnut"></canvas>;
}

export default ChartDoughnut;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./pie-chart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const salesData = [
    { name: "Direct", value: 300.56, color: "#2D2D2D", percentage: 38.6 },
    { name: "Affiliate", value: 135.18, color: "#A8E6A3", percentage: 17.4 },
    { name: "Sponsored", value: 154.02, color: "#8B9FFF", percentage: 19.8 },
    { name: "E-mail", value: 48.96, color: "#87CEEB", percentage: 6.3 },
  ];

  const data = {
    labels: salesData.map((item) => item.name),
    datasets: [
      {
        data: salesData.map((item) => item.value),
        backgroundColor: salesData.map((item) => item.color),
        borderWidth: 0,
        cutout: "60%",
        borderRadius: 19,
        borderJoinStyle: "round",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.parsed;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
        backgroundColor: "#374151",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    elements: {
      arc: {
        borderRadius: 15,
      },
    },
    layout: {
      padding: 10,
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="pie-chart-container">
      <h2 className="pie-chart-title">Total Sales</h2>

      <div className="chart-wrapper">
        <div className="chart-container">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      {/* Custom Legend */}
      <div className="legend">
        {salesData.map((item, index) => (
          <div key={item.name} className="legend-item">
            <div className="legend-info">
              <div
                className="legend-color"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="legend-label">{item.name}</span>
            </div>
            <span className="legend-value">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;

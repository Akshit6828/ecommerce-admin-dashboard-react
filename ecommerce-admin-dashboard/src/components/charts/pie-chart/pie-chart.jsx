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

  // Add small gap values between segments
  const createDataWithGaps = () => {
    const gapValue = 10; // Slightly larger gap for better rounded corner visibility
    const dataWithGaps = [];
    const colorsWithGaps = [];
    const labelsWithGaps = [];
    const borderRadiusArray = [];

    salesData.forEach((item, index) => {
      dataWithGaps.push(item.value);
      colorsWithGaps.push(item.color);
      labelsWithGaps.push(item.name);
      // Each segment gets rounded corners on both ends
      borderRadiusArray.push(15);

      // Add gap after each segment (except the last one)
      if (index < salesData.length - 1) {
        dataWithGaps.push(gapValue);
        colorsWithGaps.push("transparent");
        labelsWithGaps.push("gap");
        borderRadiusArray.push(0); // No border radius for gaps
      }
    });
    dataWithGaps.push(gapValue);
    colorsWithGaps.push("transparent");
    labelsWithGaps.push("gap");
    borderRadiusArray.push(0); // No border radius for gaps
    return { dataWithGaps, colorsWithGaps, labelsWithGaps, borderRadiusArray };
  };

  const { dataWithGaps, colorsWithGaps, labelsWithGaps, borderRadiusArray } =
    createDataWithGaps();

  const data = {
    labels: labelsWithGaps,
    datasets: [
      {
        data: dataWithGaps,
        backgroundColor: colorsWithGaps,
        borderWidth: 0,
        cutout: "60%",
        borderRadius: borderRadiusArray, // Apply individual border radius to each segment
        borderJoinStyle: "round",
        borderSkipped: false, // Ensure all borders are rendered
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
        filter: function (tooltipItem) {
          // Hide tooltip for gap segments
          return tooltipItem.label !== "gap";
        },
        callbacks: {
          label: function (context) {
            if (context.label === "gap") return null;
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
        borderRadius: 15, // Global border radius for all arc elements
        borderSkipped: false, // Ensure rounded corners on both ends
      },
    },
    layout: {
      padding: 10,
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    onHover: (event, elements) => {
      // Change cursor only for non-gap segments
      const chart = event.chart;
      const canvas = chart.canvas;
      if (elements.length > 0) {
        const element = elements[0];
        const label = chart.data.labels[element.index];
        canvas.style.cursor = label !== "gap" ? "pointer" : "default";
      } else {
        canvas.style.cursor = "default";
      }
    },
  };

  return (
    <div className="pie-chart-container">
      <h2 className="title">Total Sales</h2>

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

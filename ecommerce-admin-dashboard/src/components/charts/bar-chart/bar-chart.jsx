import { Bar } from "react-chartjs-2";
import "./bar-chart.scss";
import ChartJS from "../../../chart-js-config";

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide legend as the original chart doesn't show one
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#9CA3AF",
        font: {
          size: 14,
        },
      },
    },
    y: {
      stacked: true,
      beginAtZero: true,
      max: 30,
      grid: {
        color: "rgba(156, 163, 175, 0.1)",
      },
      border: {
        display: false,
      },
      ticks: {
        color: "#9CA3AF",
        font: {
          size: 12,
        },
        callback: function (value) {
          return value === 0 ? "0" : value + "M";
        },
        stepSize: 10,
      },
    },
  },
  elements: {
    bar: {
      borderRadius: 0,
      borderSkipped: false,
    },
  },
  categoryPercentage: 0.6,
  barPercentage: 0.8,
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const projectionsVsActualsData = {
  labels,
  datasets: [
    {
      label: "Actuals",
      data: [16, 19, 17, 22, 16, 19], // Lower portions (darker blue)
      backgroundColor: "#7DD3FC", // Lighter blue for actuals
      borderWidth: 0,
      stack: "stack1",
    },
    {
      label: "Projections",
      data: [4, 6, 4, 5, 2, 6], // Upper portions (lighter blue)
      backgroundColor: "#BAE6FD", // Even lighter blue for projections
      borderWidth: 0,
      stack: "stack1",
    },
  ],
};

const BarChart = ({ data = projectionsVsActualsData }) => {
  return (
    <div className="projections-vs-actuals-chart">
      <h3 className="chart-title">Projections vs Actuals</h3>
      <div className="chart-container">
        <Bar data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default BarChart;

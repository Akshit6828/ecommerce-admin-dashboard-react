import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";
import "./line-chart.scss";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const tinyChartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    y: {
      min: 0,
      max: 30,
      ticks: { stepSize: 10, callback: (val) => `${val}M` },
    },
    x: { display: true },
  },
  elements: {
    line: { tension: 0.5, borderWidth: 3 },
    point: { radius: 0 },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const dummyData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Current Week",
      data: [13, 8, 10, 14, 20, 19],
      borderColor: "black",
      backgroundColor: "rgba(0,0,0,0.08)",
      borderDash: [0],
      fill: false,
    },
    {
      label: "Previous Week",
      data: [9, 17, 13, 15, 16, 23],
      borderColor: "#b6d0f8",
      backgroundColor: "rgba(182, 208, 248, 0.2)",
      borderDash: [0],
      fill: false,
    },
    {
      label: "Current Week Forecast",
      data: [null, null, null, 14, 21, 20],
      borderColor: "black",
      borderDash: [10, 5],
      fill: false,
      pointRadius: 0,
    },
  ],
};

const LineChart = ({ data = dummyData }) => {
  return (
    <div className="line-chart">
      <div className="title-container">
        <h5 className="title">Revenue</h5>
        <span className="separator">|</span>
        <ul>
          <li>
            Current Week <b>$58,211</b>
          </li>
          <li>
            Previous Week <b>$68,768</b>
          </li>
        </ul>
      </div>
      <div className="chart-container">
        <Line data={data} options={tinyChartOptions} />
      </div>
    </div>
  );
};

export default LineChart;

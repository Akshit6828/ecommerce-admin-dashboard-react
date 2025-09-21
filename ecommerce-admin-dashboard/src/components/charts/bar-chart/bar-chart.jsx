import { Bar } from "react-chartjs-2";
import "./bar-chart.scss";
import ChartJS from "../../../chart-js-config";

const tinyChartOptions = {
  responsive: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
const customersTrendData = {
  labels,
  datasets: [
    {
      label: "Customers",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [3200, 3400, 3600, 3781],
      backgroundColor: "rgba(56,189,248,0.1)",
      borderColor: "#38bdf8",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
    },
  ],
};

const BarChart = ({ data = customersTrendData }) => {
  return (
    <div className="bar-chart">
      <h5 className="title">Projections vs Actuals</h5>
      <div className="chart-container">
        <Bar data={data} options={tinyChartOptions} height={250} />
      </div>
    </div>
  );
};

export default BarChart;

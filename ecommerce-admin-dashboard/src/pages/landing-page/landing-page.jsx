import { colors } from "@mui/material";
import SummeryCard from "../../components/summery-card/summery-card";
import "./landing-page.scss";
import BarChart from "../../components/charts/bar-chart/bar-chart";
import LineChart from "../../components/charts/line-chart/line-chart";

const summaryCardsData = [
  {
    title: "Customers",
    count: "3,781",
    percentage: "+11.01%",
    color: "#e3f5ff",
    icon: "up", // use your up arrow or chart-up icon
  },
  {
    title: "Orders",
    count: "1,219",
    percentage: "-0.03%",
    color: "#f7f9fb",
    icon: "down", // use your down arrow or chart-down icon
  },
  {
    title: "Revenue",
    count: "$695",
    percentage: "+15.03%",
    color: "#f7f9fb",
    icon: "up", // use your up arrow or chart-up icon
  },
  {
    title: "Growth",
    count: "30.1%",
    percentage: "+6.08%",
    color: "#e5ecf6",
    icon: "up", // use your up arrow or chart-up icon
  },
];

export default function LandingPage() {
  return (
    <div className="landing-dashboard">
      <h2>eCommerce</h2>
      <div className="dashboard-containt">
        <section className="basic-summery">
          <div className="counts-summery">
            {summaryCardsData?.map((cardData, index) => (
              <SummeryCard cardData={cardData} key={index} />
            ))}
          </div>
          <div className="projection-summery">
            <BarChart />
          </div>
        </section>
        <section className="revenue-row">
          <div className="revenue-summery">
            <LineChart />
          </div>
          <div className="revenue-by-location"></div>
        </section>
        <section className="sales-summery">
          <div className="top-products-conatiner"></div>
          <div className="total-sales-summery"></div>
        </section>
      </div>
    </div>
  );
}

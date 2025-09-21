import { colors } from "@mui/material";
import SummeryCard from "../../components/summery-card/summery-card";
import "./landing-page.scss";
import BarChart from "../../components/charts/bar-chart/bar-chart";
import LineChart from "../../components/charts/line-chart/line-chart";
import WorldMap from "../../components/charts/world-map/world-map";
import { Pie } from "react-chartjs-2";
import PieChart from "../../components/charts/pie-chart/pie-chart";
import TopSellingProduct from "../../components/top-selling-products/top-selling-products";

const summaryCardsData = [
  {
    title: "Customers",
    count: "3,781",
    percentage: "+11.01%",
    color: "#e3f5ff", // harcoding here as here we wont change out tiles based on global variables
    icon: "up",
    classes: "light",
  },
  {
    title: "Orders",
    count: "1,219",
    percentage: "-0.03%",
    color: "var(--Primary-Light-2)",
    icon: "down",
    classes: "dark",
  },
  {
    title: "Revenue",
    count: "$695",
    percentage: "+15.03%",
    color: "var(--Primary-Light-2)",
    icon: "up",
    classes: "dark",
  },
  {
    title: "Growth",
    count: "30.1%",
    percentage: "+6.08%",
    color: "#e5ecf6",
    icon: "up",
    classes: "light",
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
          <div className="revenue-by-location">
            <WorldMap />
          </div>
        </section>
        <section className="sales-summery">
          <div className="top-products-conatiner">
            <TopSellingProduct />
          </div>
          <div className="total-sales-summery">
            <PieChart />
          </div>
        </section>
      </div>
    </div>
  );
}

import { use } from "react";
import "./comming-soon.scss";
import { useLocation } from "react-router-dom";

const CommingSoon = () => {
  const location = useLocation();

  return (
    <div className="comming-soon">
      <p>
        <b>"{location?.pathname}"</b> Page is in development. Will be available
        soon
      </p>
    </div>
  );
};

export default CommingSoon;

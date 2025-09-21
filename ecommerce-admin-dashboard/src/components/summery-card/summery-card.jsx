import "./summery-card.scss";

const SummeryCard = ({ cardData }) => {
  const iconUrl =
    cardData.icon === "up"
      ? "/public/assets/icons/global/ArrowRise.svg"
      : "/public/assets/icons/global/ArrowDown.svg";
  return (
    <div className="summery-card" style={{ backgroundColor: cardData?.color }}>
      <h6 className="title">{cardData?.title || ""}</h6>
      <div className="content">
        <span className="count">{cardData?.count || 0}</span>
        <span className="percentage">
          {cardData?.percentage || 0}
          <img src={iconUrl} className="icon" alt="arrow"></img>
        </span>
      </div>
    </div>
  );
};

export default SummeryCard;

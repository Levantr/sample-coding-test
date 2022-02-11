import { Card as AntCard } from "antd";
import sampleImg from "../../images/sample-card-image.jpg";
import "./Card.less";
const { Meta } = AntCard;

function Card({ title, description, children, cover, onClick }) {
  return (
    <AntCard
      hoverable
      cover={cover && <img src={sampleImg} alt="cover" />}
      className={onClick ? "Card__button" : "Card"}
      style={{ margin: 10 }}
      onClick={onClick}
    >
      {!cover && children}
      {title && description && <Meta title={title} description={description} />}
    </AntCard>
  );
}

export default Card;

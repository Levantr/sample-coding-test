import React from "react";
import { useSelector } from "react-redux";
import { Card, Col } from "antd";
import { selectCards } from "./cardsSlice";
import "./Cards.scss";

function Cards() {
  const cards = useSelector(selectCards);

  return cards.map((card) => (
    <Col
      key={card.title}
      xs={{ span: 16, offset: 4 }}
      sm={{ span: 8, offset: 0 }}
      lg={{ span: 4 }}
      className="cards"
    >
      <Card bodyStyle={{ padding: 0 }}>
        <div className="card-image">
          <img alt="example" width="100%" src={card.image} />
        </div>
        <div className="card-body">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      </Card>
    </Col>
  ));
}

export default Cards;

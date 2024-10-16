import React from "react";
import Card from "./Card";

const CardList = ({ cardList }) => (
  <div className="flex flex-col md:flex-row justify-center items-center my-5">
    {cardList.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        primaryPrice={card.primaryPrice}
        secondaryPrice={card.secondaryPrice}
        descriptionList={card.descriptionList}
        isPrimary={index == 0}
      />
    ))}
  </div>
);

export default CardList;

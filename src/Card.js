import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div>{props.img}</div>
      <h4 className="sub">{props.topic}</h4>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;

import React from "react";
import "./style.css";

function NatureCard(props) {
  return (
    <div className="card">
      <div className="img-container">

        <img alt={props.type} src={props.image} />
      </div>
    </div>
  );
}

export default NatureCard;
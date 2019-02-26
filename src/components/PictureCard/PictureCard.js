import React from "react";
import "./picture.css";

function PictureCard(props) {
  return (
    <div className="card">
    <img className="imgContainer"
        onClick={()=>props.handleImageClick(props.id)} 
        alt={props.name} 
        src={props.image} />
    </div>
  );
}

export default PictureCard;



import React from "react";
import "./nav.css";

const Nav = props => (
  <div>
      <ul className="nav nav-justified">
        <li className="title"><a href="/">Nature Click Game</a></li>
        <li className="message">{props.message}</li>
        <li className="score">Score: <span>{props.score}{props.fade}</span> 
        | Best Score: {props.bestScore}</li>
      </ul>
  </div>
);

export default Nav;

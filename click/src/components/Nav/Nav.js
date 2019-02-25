import React from "react";
import "./nav.css";
// import styled from "styled-components";

const Nav = props => (
  <div>
      <ul className="nav nav-justified">
        <li className="title">Picture Click Game</li>
        <li className="message">{props.message}</li>
        <li className="score">Score: <span>{props.score}</span> 
        | Best Score: {props.bestScore}</li>
      </ul>
  </div>
);

export default Nav;

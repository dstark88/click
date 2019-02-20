import React from "react";
import "./style.css";
// import styled from "styled-components";

const Nav = props => (
  <div>
      <ul className="nav nav-pills nav-justified">
      <li class="title"><a href="/">Nature Click Game</a></li>
      <li class="score">Score: <span>{props.currentScore}</span> | Top Score: {props.topScore}</li>
      </ul>
  </div>
);

// By extending the React.Component class, Counter inherits functionality from it
// class Counter extends React.Component {
//   // Setting the initial state of the Counter component
//   state = {
//     count: 0
//   };

//   // handleIncrement increases this.state.count by 1
//   handleIncrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count + 1 });
//   };

//   // handleDecrement decreases this.state.count by 1
//   handleDecrement = () => {
//     // We always use the setState method to update a component's state
//     this.setState({ count: this.state.count - 1 });
//   };

//   // The render method returns the JSX that should be rendered
//   render() {
//     return (
//       <div className="card text-center">
//         <div className="card-header bg-primary text-white">
//           Click Counter!
//         </div>
//         <div className="card-body">
//           <p className="card-text">Click Count: {this.state.count}</p>
//           <button className="btn btn-primary" onClick={this.handleIncrement}>
//             Increment
//           </button>{" "}
//           <button className="btn btn-danger" onClick={this.handleDecrement}>
//             Decrement
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

export default Nav;

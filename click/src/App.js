import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import NatureCard from "./components/NatureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import natures from "./natures.json";

// function App() {
//   return <Counter />;
// }

class App extends Component {
  // Setting this.state.natures to the natures json array
  state = {
    topScore: 0,
    currentScore: 0,
    natures: natures,
    clicked: []
  };

  removeNature = id => {
    // Filter this.state.natures for natures with an id not equal to the id being removed
    const natures = this.state.natures.filter(nature => nature.id !== id);
    // Set this.state.natures equal to the new natures array
    this.setState({ natures });
  };

  // Map over this.state.natures and render a NatureCard component for each nature object
  render() {
    return (
     
      <Wrapper>
        <Nav 
          currentScore={this.state.currentScore}
          toScore={this.state.topScore}
        />
        <Title>Natures List</Title>
        {this.state.natures.map(nature => (
          <NatureCard
            removeNature={this.removeNature}
            id={nature.id}
            type={nature.type}
            image={nature.image}
          />
        ))}
      </Wrapper>
     
    );
  }

}


export default App;

 

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import PictureCard from "./components/PictureCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Footer from "./components/Footer/index";
import pictures from "./pictures.json";

class App extends Component {
  
  state = {
    bestScore: 0,
    score: 0,
    message: "Click an image to begin!",
    pictures,
  }

  handleImageClick = (id) => {
    var clone =this.state.pictures

    for (let i = 0; i < clone.length; i++) {
      if (clone[i].id === id){
        if (clone[i].beenClicked === true) {
          console.log(i, "index of clicked");
          if (this.state.score > this.state.bestScore) {
            this.setState({
              bestScore: this.state.score,
              pictures: clone,
              message: "Sorry, you clicked incorrectly. Start Over!",
            });
          }
          for (let j = 0; j < clone.length; j++) {
            clone[j].beenClicked = false;
          }
          this.setState({
            score: 0,
            pictures: clone
          });
        } else {
          this.setState({
            score: this.state.score + 1,
            pictures: clone,
            message: "You clicked correctly. Keep clicking!"
          });
          if (this.state.score === 11) {
            this.setState({
              bestScore: 12,
              pictures: clone,
              message:"Wow! You are a master at memory games!"
            });
            for (let j = 0; j < clone.length; j++) {
              clone[j].beenClicked = false;
            }
            this.setState({
              score: 0,
              pictures: clone,
            });
          }
          clone[i].beenClicked = true;
        }
        break;
      } 
    }
    clone = clone.sort(() => Math.random() - 0.5);
  }

  render() {
    return (
    <div>
        <Nav
          message={this.state.message} 
          score={this.state.score}
          bestScore={this.state.bestScore}
        />
        <Wrapper>
        <Title></Title>
          {this.state.pictures.map(picture => (
            <PictureCard
              key={picture.id}
              id={picture.id}
              name={picture.name}
              image={picture.image}
              handleImageClick={this.handleImageClick}
            />
            ))
          }
      </Wrapper>
      <Footer />
    </div>
    )
  };
};

export default App;

 

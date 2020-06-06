import React, { Component } from "react";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Julian", age: "24", belt: "black", id: 1 },
      { name: "Josh", age: "21", belt: "black", id: 2 },
      { name: "Plamen", age: "30", belt: "black", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = this.state.ninjas.length + 1;
    let updateNinjas = [...this.state.ninjas, ninja];

    this.setState({
      ninjas: updateNinjas,
    });
    console.log(updateNinjas);
  };

  deleteNinja = (id) => {};

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;

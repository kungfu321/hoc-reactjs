import React from "react";
import "./App.css";
import Author from "./Author";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChangeName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div className="App">
        <p>Your name: {this.state.name}</p>

        <Author name={this.state.name} handleChangeName={this.handleChangeName} />
      </div>
    );
  }
}

export default App;

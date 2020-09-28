import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <p>Count: {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Thêm 1
        </button>
        <button
          onClick={() => {
            this.setState((state) => {
              return {
                count: state.count - 2,
              };
            });
          }}
        >
          Bớt 2
        </button>
      </div>
    );
  }
}

export default App;

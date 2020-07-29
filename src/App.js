import React, { Component } from "react";
import Counter from "./Counter";

class App extends Component {
  state = {
    number: 0,
  };

  add = () => {
    this.setState({ number: this.state.number + 1 });
  };
  minus = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div>
        <Counter number={this.state.number} add={this.add} minus={this.minus} />
      </div>
    );
  }
}

export default App;

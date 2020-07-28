import React, { Component } from "react";
import Axios from "axios";

class App extends Component {
  state = {
    data: {
      userId: null,
      id: null,
      title: null,
      completed: null,
    },
  };
  onClick = async () => {
    const { data } = this.state;

    let resp = await Axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((resp) => {
      console.log(resp);
      this.setState({
        data: { data, ...resp.data },
      });
    });
    console.log(1);
    console.log(2);
    console.log(9999);
    console.log(10000);
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <div>아이디 : {data.userId}</div>
        <div>제목: {data.title}</div>
        <hr></hr>
        <h1>클릭하세요</h1>
        <button onClick={this.onClick}>클릭</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
      this.setState({
        contacts: res.data
      })
    );
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainline: [],
      value: ""
    };
  }
  componentDidMount() {
    fetch("https://api.tfl.gov.uk/Line/northern")
      .then(response => response.json())
      .then(data => this.setState({ trainline: data }));
}
render() {
  return (
    <div></div>
  )
}
}
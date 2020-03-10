import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainline: [],
      value: "",
      tflLineColour: {
        bakerloo: "#a52a2a",
        central: "#ff0000",
        circle: "#ffff00",
        district: "#008000",
        dlr: "#20B2AA",
        "hammersmith-city": "#DB7093",
        jubilee: "#A9A9A9",
        "london-overground": "#FF8C00",
        metropolitan: "#800080",
        northern: "#000000",
        piccadilly: "#00008B",
        tram: "#7FFF00",
        victoria: "#00CED1",
        "waterloo-city": "#87CEFA"
      }
    };
  }

  onChangeHandler = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    let lineSearch = this.state.value;
    fetch(`https://api.tfl.gov.uk/Line/${lineSearch}` + "/status")
      .then(response => response.json())
      .then(data => this.setState({ trainline: data }));
  };

  render() {
    return (
      <div className="App">
        <Router className="App">
          <Route exact path="/">
            <Search
              state={this.state}
              submitLine={this.onSubmitHandler}
              typeLine={this.onChangeHandler}
            />
          </Route>
        </Router>
      </div>
    );
  }
}

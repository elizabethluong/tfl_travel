import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./components/Search";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainline: [],
      value: ""
    };
  }

  onChangeHandler = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    let lineSearch = this.state.value;
    fetch(`https://api.tfl.gov.uk/Line/${lineSearch}`)
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
              addLine={this.onSubmitHandler}
              typeLine={this.onChangeHandler}
            />
          </Route>
        </Router>
      </div>
    );
  }
}

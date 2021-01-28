import React, { Component } from "react";
import SearchBar from "./SearchBar";

export class App extends Component {
  state = {
    term: "",
  };

  handleOnInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleOnFormSubmit = (event) => {
    event.preventDefault();
    // TO DO MAKE SURE WE CALL CALL BACK FROM PRESENT COMP
    
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          value={this.state.term}
          OnInputChange={this.handleOnInputChange}
          onFormSubmit={this.handleOnFormSubmit}
        />
      </div>
    );
  }
}

export default App;

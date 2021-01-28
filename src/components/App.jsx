import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideosList from "./VideosList";
import youtube from "../apis/youtube.js";

export class App extends Component {
  state = {
    videos: [],
    term: "",
  };

  handleOnInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
  };

  handleOnFormSubmit = (event) => {
    event.preventDefault();
    this.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          value={this.state.term}
          OnInputChange={this.handleOnInputChange}
          onFormSubmit={this.handleOnFormSubmit}
        />
        <VideosList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

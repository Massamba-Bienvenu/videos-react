import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideosList from "./VideosList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube.js";

export class App extends Component {
  state = {
    videos: [],
    term: "",
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("piano");
  }

  handleOnInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleOnFormSubmit = (event) => {
    event.preventDefault();
    this.onTermSubmit(this.state.term);
  };

  handleOnVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          value={this.state.term}
          OnInputChange={this.handleOnInputChange}
          onFormSubmit={this.handleOnFormSubmit}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                videos={this.state.videos}
                onVideoSelect={this.handleOnVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

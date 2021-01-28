import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar ui segment ">
        <form onSubmit={this.props.onFormSubmit} className="ui form">
          <div className="field">
            <label>Recherche de vidéos</label>
            <input
              type="text"
              placeholder="Tapez un mot pour rechercher des vidéos"
              value={this.props.value}
              onChange={this.props.OnInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

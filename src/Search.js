import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search users..."
            onChange={this.props.filterItem}
          />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}
export default Search;

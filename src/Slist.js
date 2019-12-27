import React, { Component } from "react";

class Slist extends Component {
  render() {
    //console.log(this.props.user);
    return (
      <div className="ui cards centered">
        <div className="card" key={this.props.user.email}>
          <div className="content">
            <div className="header"> {this.props.user.name}</div>
            <div className="meta">Age: {this.props.user.age}</div>
            <div className="description">Email: {this.props.user.email}</div>
            <div className="description">DOB: {this.props.user.dob}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                className="ui basic green button"
                onClick={() => this.props.editUser(this.props.user.id)}
              >
                Edit
              </div>
              <div
                className="ui basic red button"
                onClick={() => this.props.deleteItem(this.props.user.id)}
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Slist;

import React, { Component } from "react";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.eName = React.createRef();
    this.eEmail = React.createRef();
    this.eAge = React.createRef();
    this.edob = React.createRef();
  }

  render() {
    return (
      <div className="ui cards centered">
        <div className="card">
          <h3 style={{ marginBottom: 0 }}>Edit User</h3>

          <div className="content">
            <div className="header">
              <input
                type="text"
                defaultValue={this.props.user.name}
                placeholder="Enter your name"
                onChange={this.props.user.editName}
                ref={this.eName}
              />
            </div>
            <div className="meta">
              <input
                type="text"
                defaultValue={this.props.user.email}
                placeholder="Enter your email"
                onChange={this.props.user.editAge}
                ref={this.eEmail}
              />
            </div>
            <div className="description">
              <input
                type="number"
                defaultValue={this.props.user.age}
                placeholder="Enter your age"
                onChange={this.props.user.editEmail}
                ref={this.eAge}
              />
            </div>

            <div className="description">
              <input
                type="date"
                defaultValue={this.props.user.dob}
                placeholder="Enter your dob"
                onChange={this.props.user.editDob}
                ref={this.edob}
              />
            </div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                className="ui basic green button"
                onClick={() =>
                  this.props.updateUser(
                    this.eName.current.value,
                    this.eEmail.current.value,
                    this.eAge.current.value,
                    this.edob.current.value,
                    this.props.user.id
                  )
                }
              >
                Update
              </div>
              <div
                className="ui basic red button"
                onClick={() => this.props.editCancel(this.props.user.id)}
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Edit;

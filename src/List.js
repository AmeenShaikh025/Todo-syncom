import React, { Component } from "react";

import Slist from "./Slist";
import Edit from "./Edit";
import Search from "./Search";

export default class List extends Component {
  render() {
    //const usersList = this.props.item;
    //console.log(this.props.item.items);
    // console.log(this.props);

    return (
      <div>
        <Search filterItem={this.props.filterItem} />

        {this.props.item.items.map(user => (
          <div key={user.email}>
            {user.isediting ? (
              <Edit
                key={user.id}
                user={user}
                editCancel={this.props.editCancel}
                deleteItem={this.props.handleDelete}
                editUser={this.props.handleEdit}
                updateUser={this.props.updateUser}
              />
            ) : (
              <Slist
                key={user.id}
                user={user}
                editUser={this.props.editUser}
                deleteItem={this.props.deleteItem}
                currentPage={this.props.currentPage}
                userPerPage={this.props.userPerPage}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

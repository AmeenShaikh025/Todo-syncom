import React from "react";
import "./App.css";
import List from "./List";

class App extends React.Component {
  state = {
    items: [],
    currentItems: {
      name: "",
      age: "",
      email: "",
      dob: "",
      isediting: false,
      id: null
    },
    currentPage: 1,
    userPerPage: 3
  };
  handleName = e => {
    this.setState({
      currentItems: {
        name: e.target.value,
        age: this.state.currentItems.age,
        email: this.state.currentItems.email,
        dob: this.state.currentItems.dob,
        isediting: false,
        id: Date.now()
      }
    });
  };
  handleAge = e => {
    this.setState({
      currentItems: {
        age: e.target.value,
        name: this.state.currentItems.name,
        email: this.state.currentItems.email,
        dob: this.state.currentItems.dob,
        isediting: false,
        id: this.state.currentItems.id
      }
    });
  };
  handleEmail = e => {
    this.setState({
      currentItems: {
        email: e.target.value,
        name: this.state.currentItems.name,
        age: this.state.currentItems.age,
        dob: this.state.currentItems.dob,
        isediting: false,
        id: this.state.currentItems.id
      }
    });
  };
  handleDob = e => {
    this.setState({
      currentItems: {
        dob: e.target.value,
        name: this.state.currentItems.name,
        age: this.state.currentItems.age,
        email: this.state.currentItems.email,
        isediting: false,
        id: this.state.currentItems.id
      }
    });
  };
  handleAdd = e => {
    e.preventDefault();
    const newItem = this.state.currentItems;
    if (
      this.state.currentItems.name !== "" &&
      this.state.currentItems.age !== "" &&
      this.state.currentItems.email !== "" &&
      this.state.currentItems.dob !== ""
    ) {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItems: {
          name: "",
          age: "",
          email: "",
          dob: "",
          isediting: false,
          id: this.state.currentItems.id
        }
      });
      localStorage.setItem("users", JSON.stringify(newItems));
    }
  };

  componentDidMount() {
    const prevUsers = JSON.parse(localStorage.getItem("users"));
    this.setState({
      items: prevUsers,
      currentItems: {
        name: "",
        age: "",
        email: "",
        dob: "",
        isediting: false,
        id: null
      }
    });
  }

  handleDelete = em => {
    const filterdItem = this.state.items.filter(item => item.id !== em);
    localStorage.setItem("users", JSON.stringify(filterdItem));
    this.setState({
      items: filterdItem
    });
  };

  handleEdit = key => {
    const allUser = this.state.items;
    allUser.map(user => {
      if (user.id === key) {
        user.isediting = true;
        this.setState({
          items: allUser
        });
      }
    });
  };

  cancelEdit = key => {
    const allUser = this.state.items;
    allUser.map(user => {
      if (user.id === key) {
        user.isediting = false;
        this.setState({
          items: allUser
        });
      }
    });
  };

  handleUpdate = (name, email, age, dob, key) => {
    const allUser = this.state.items;
    let updatedItem;
    allUser.map(user => {
      if (user.id === key) {
        user.name = name;
        user.email = email;
        user.age = age;
        user.dob = dob;
        user.isediting = false;
      }
      updatedItem = this.state.items;
    });
    this.setState({
      items: updatedItem
    });
    localStorage.setItem("users", JSON.stringify(this.state.items));
  };

  handleFilter = e => {
    let users = this.state.items;
    if (e.target.value !== "") {
      users = users.filter(user => {
        return (
          user.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
        );
      });
      this.setState({
        items: users
      });
    } else {
      const allUsers = JSON.parse(localStorage.getItem("users"));
      this.setState({
        items: allUsers
      });
    }
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="ui header">USER TODO</h1>
        <div className="ui left aligned container">
          <div className="ui grid">
            <div className="eight wide column">
              <form id="todo-form" onSubmit={this.handleAdd}>
                <div className="ui form">
                  <div className="required field">
                    <label>Name</label>
                    <input
                      type="text"
                      value={this.state.currentItems.name}
                      placeholder="Enter your name"
                      onChange={this.handleName}
                    />
                  </div>
                  <div className="required field">
                    <label>Enter Your Age</label>
                    <input
                      type="number"
                      value={this.state.currentItems.age}
                      placeholder="Enter your age"
                      onChange={this.handleAge}
                    />
                  </div>
                  <div className="required field">
                    <label>Enter Your Email</label>
                    <input
                      type="email"
                      value={this.state.currentItems.email}
                      placeholder="Enter your email"
                      onChange={this.handleEmail}
                    />
                  </div>
                  <div className="required field">
                    <label>Enter Your DOB</label>
                    <input
                      type="date"
                      value={this.state.currentItems.dob}
                      placeholder="Enter your DOB"
                      onChange={this.handleDob}
                    />
                  </div>
                  <button className="ui button" type="submit">
                    ADD
                  </button>
                </div>
              </form>
            </div>
            <div className="eight wide column">
              <List
                item={this.state}
                deleteItem={this.handleDelete}
                editUser={this.handleEdit}
                editCancel={this.cancelEdit}
                updateUser={this.handleUpdate}
                filterItem={this.handleFilter}
                currentPage={this.state.currentPage}
                userPerPage={this.state.userPerPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

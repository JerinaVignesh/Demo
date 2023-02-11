import React from "react";
import "../Components/List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Designation: "",
      userList: [
        {
          id: 1,
          name: "Jerina",
          designation: "Developer",
        },
        {
          id: 2,
          name: "Sonali",
          designation: "Banking",
        },
        {
          id: 3,
          name: "Swathy",
          designation: "Testing",
        },
      ],
    };
    this.Create = this.create.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this);
    this.DesignationOnChange = this.designationOnChange.bind(this);
  }

  nameOnChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  designationOnChange(event) {
    this.setState({
      designation: event.target.value,
    });
  }
  create(event) {
    event.preventDefault();
    console.log(this.state.name, this.state.designation);
    if (this.state.name && this.state.designation) {
      var tempuserList = this.state.userList;
      var newUserObj = {
        id: this.state.userList.length + 1,
        name: this.state.name,
        designation: this.state.designation,
      };
      tempuserList.push(newUserObj);
      this.setState({
        userList: tempuserList,
      });
    } else {
    }
  }
  deleteUser = (index) => {
    var tempuserList = this.state.userList;
    tempuserList.splice(index, 1);
    this.setState({
      userList: tempuserList,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="form-outer">
            <h2 style={{ color: "black", marginBottom: "20px" }}>
              LOGIN FORMS
            </h2>
            <form>
              <div>
                <label className="name">Name</label>
                <input
                  type="text"
                  placeholder="name"
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.nameOnChange}
                ></input>
              </div>
              <div>
                <label className="pass">Designation</label>
                <input
                  type="text"
                  placeholder="designation"
                  autoComplete="new-Password"
                  value={this.state.designation}
                  onChange={this.designationOnChange}
                ></input>
              </div>
              <button className="btn btn-warning mb-3" onClick={this.Create}>
                create
              </button>
            </form>
          </div>
          <h4 className="mt-4 mb-4">User List</h4>
          <table className="table table-striped">
            <thead>
              <tr className="table-primary">
                <th>id</th>
                <th>name</th>
                <th>designation</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.designation}</td>
                  <td>
                    <button className="btn btn-warning">Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default List;

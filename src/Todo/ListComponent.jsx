import React from "react";
class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "jerina",
          desg: "ui dev",
        },
        {
          id: 2,
          name: "sonali",
          desg: "ui dev",
        },
        {
          id: 3,
          name: "swathy",
          desg: "ui dev",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <h4 className="mt-4 mb-4">User List</h4>
          <table className="table table-striped">
            <thead>
              <tr className="table-dark">
                <th>id</th>
                <th>name</th>
                <th>designation</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userList.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.desg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ListComponent;

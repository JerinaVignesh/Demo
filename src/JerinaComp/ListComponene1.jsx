import React from "react";
import { useNavigate } from "react-router-dom";
class ListComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          id: 1,
          name: "jerina",
          Degree: "MBA",
        },
        {
          id: 2,
          name: "sonali",
          Degree: "MA",
        },
        {
          id: 3,
          name: "swathy",
          Degree: "BE",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="container">
          <h4 className="mt-4 mb-4">Details</h4>
          <table className="table table-striped">
            <thead>
              <tr className="table-dark">
                <th>id</th>
                <th>name</th>
                <th>degree</th>
              </tr>
            </thead>
            <tbody>
              {this.state.details.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.Degree}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default ListComponent1;

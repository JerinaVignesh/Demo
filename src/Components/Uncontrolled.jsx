import React from "react";
import "../Components/Uncontrolled.css";

class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.submit = this.submit.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log("username", this.username.current.value);
    console.log("password", this.password.current.value);
  }
  render() {
    return (
      <div className="formOuter">
        <h2 style={{ colour: "white", marginBottom: "20px" }}>LOGIN FORM</h2>
        <form>
          <div>
            <label className="name" style={{ marginBottom: "20px" }}>
              User Name
            </label>
            <input
              type="text"
              placeholder="username"
              ref={this.username}
            ></input>
          </div>
          <div>
            <label className="pass">Password</label>
            <input
              type="password"
              placeholder="password"
              ref={this.password}
            ></input>
          </div>
          <button
            className="btns btn-warning"
            onClick={this.submit}
            style={{ marginBottom: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;

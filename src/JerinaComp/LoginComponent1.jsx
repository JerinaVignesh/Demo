import React from "react";

class LoginComponent1 extends React.Component {
  constructor(props) {
    super(props);
  }
  submit(event) {
    event.preventDefault();
    this.props.navigate("/home");
  }
  render() {
    return (
      <div>
        <form action="action_page.php">
          <div className="container" style={{ marginTop: "100px" }}>
            <h1>Login Form</h1>

            <label className="UserName" style={{ marginTop: "50px" }}>
              <b>User Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter User Name"
              name="User Name"
              id="User Name"
              required
            ></input>

            <label className="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              required
            ></input>

            <button type="submit" className="loginbtn justify-content-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default LoginComponent1;

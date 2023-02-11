import React from "react";
import "../Components/Controlled.css";

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginSuccess: true,
      loginFail: false,
    };

    this.submit = this.submit.bind(this);
    this.usernameOnChange = this.usernameOnChange.bind(this);
    this.passwordOnChange = this.passwordOnChange.bind(this);
  }
  submit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
    if (this.state.username == "jerina" && this.state.password == "232623") {
      this.props.navigate("/home");
      this.setState({
        loginSuccess: true,
        loginFail: false,
      });
    } else {
      this.setState({
        loginSuccess: false,
        loginFail: true,
      });
    }
  }
  usernameOnChange(event) {
    this.setState({
      username: event.target.value,
    });
  }
  passwordOnChange(event) {
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    return (
      <div className="form-outer ">
        <h2 style={{ color: "black", marginBottom: "20px" }}>LOGIN FORMS</h2>
        <form>
          <div>
            <label className="name " style={{ color: "black" }}>
              User name
            </label>
            <input
              type="text"
              placeholder="username"
              autoComplete="username"
              value={this.state.username}
              onChange={this.usernameOnChange}
            ></input>
          </div>
          <div>
            <label className="pass" style={{ color: "black" }}>
              password
            </label>
            <input
              type="password"
              placeholder="password"
              autoComplete="new-Password"
              value={this.state.password}
              onChange={this.passwordOnChange}
            ></input>
          </div>
          <button className="btn btn-primary mb-5px" onClick={this.submit}>
            Submit
          </button>
          <LoginStatus ls={this.state.loginSuccess} lf={this.state.loginFail} />
        </form>
      </div>
    );
  }
}
function LoginStatus(props) {
  if (props.ls || props.lf) {
    return props.ls ? (
      <div className="success-text">Login Success</div>
    ) : (
      <div className="fail-text">Login Failed</div>
    );
  }
}
export default LoginComponent;

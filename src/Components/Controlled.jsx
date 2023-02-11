import React from "react";
import "../Components/Controlled.css";
class Controllcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      Designation: "",
      loginSuccess: false,
      loginFail: false,
    };

    this.Create = this.create.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this);
    this.DesignationOnChange = this.designationOnChange.bind(this);
  }
  create(event) {
    event.preventDefault();
    console.log(this.state.name, this.state.designation);
    if (this.state.name && this.state.designation) {
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
  render() {
    return (
      <div className="form-outer">
        <h2 style={{ color: "black", marginBottom: "20px" }}>LOGIN FORMS</h2>
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
              placeholder="Designation"
              autoComplete="new-Password"
              value={this.state.password}
              onChange={this.passwordOnChange}
            ></input>
          </div>
          <button className="btn btn-warning mb-3" onClick={this.Create}>
            create
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
export default Controllcomponent;

import React from "react";
import "../Counter/Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div className="counterApp">
        <button className="incButton btn btn-success" onClick={this.increment}>
          + {this.props.inc}
        </button>
        <label className="incValue">{this.state.counter}</label>
        <button className="decButton btn btn-danger" onClick={this.decrement}>
          - {this.props.inc}
        </button>
      </div>
    );
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + this.props.inc,
    });
  };
  decrement = () => {
    if (this.state.counter === 0) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter - this.props.inc,
      });
    }
  };
}

export default Counter;

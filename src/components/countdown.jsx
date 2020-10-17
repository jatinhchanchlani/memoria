import React, { Component } from "react";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = { secondsLeft: props.seconds };
  }

  componentDidMount() {
    this.tick = setInterval(() => {
      if (this.state.secondsLeft === 0) {
        clearInterval(this.tick);
        return this.props.onCountDownCompleted();
      } else {
        this.setState({
          secondsLeft: this.state.secondsLeft - 1,
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <h4>
          <b>Time remaining </b>
          <span className="badge badge-primary">
            {this.state.secondsLeft} seconds
          </span>
        </h4>
      </div>
    );
  }
}

export default Countdown;

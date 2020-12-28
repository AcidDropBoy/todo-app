import React, { Component } from 'react';
import Buttons from './buttons/buttons';
import ElapsedTime from './elapsed-time/elapsed-time';
import './timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.poll = setInterval(this.tick, 1000);
  }

  state = {
    timingEvents: [],
    nonce: 0,
  };

  componentWillUnmount() {
    clearInterval(this.tick);
    clearInterval(this.addTimerEvent);
    clearInterval(this.poll);
  }

  tick = () => {
    this.setState((state) => {
      return {
        nonce: state.nonce + 1,
      };
    });
  };

  addTimerEvent = () => {
    this.setState((state) => {
      return {
        timingEvents: [...state.timingEvents, new Date()],
      };
    });
  };

  render() {
    const { timingEvents } = this.state;
    return (
      <div className="timer">
        <ElapsedTime timingEvents={timingEvents} />
        <Buttons handleClick={this.addTimerEvent} timingEvents={timingEvents} />
      </div>
    );
  }
}
export default Timer;

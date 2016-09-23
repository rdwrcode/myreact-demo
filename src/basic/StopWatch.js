import React, { Component } from 'react';

class StopWatch extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      running: false,
      lapse: 0,
      now: Date.now()
    };

    this.timer = null;
    this.handleRunClick = this.handleRunClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
  }

  handleRunClick() {
    if (this.state.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  handleClearClick() {
    this.stop();
    this.setState({
      lapse: 0,
      now: 0
    });
  }

  start() {
    this.timer = setInterval(
      () => {
        this.setState({
          lapse: Math.floor((Date.now() - this.state.now)/1000.0)
        }, 1000);
    });

    if(!this.state.running) {
      this.setState({
        running: true,
        now: Date.now() - this.state.lapse
      })
    }
  }

  stop() {
    clearInterval(this.timer);
    this.timer = null;

    this.setState({
      running: false
    });
  }

  render() {
    return (
      <div className="StopWatch">
        <label>{this.state.lapse}s </label>
        <button onClick={this.handleRunClick}>{this.state.running ? 'Stop' : 'Start'} </button>
        <button onClick={this.handleClearClick}>Clear </button>
      </div>
    );
  }
}

export default StopWatch;


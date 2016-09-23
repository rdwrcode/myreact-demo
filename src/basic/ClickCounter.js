import React, { Component } from 'react';
import './ClickCounter.css';

class ClickCounter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
     clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
     <div>
       <button className="button" onClick={this.handleButtonClick}>Click Me!</button>
       <div>Clicked {this.state.clicks} times</div>
     </div>
    );
  }
}

export default ClickCounter;

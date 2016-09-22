import React, { Component } from 'react'; 

class TodoBanner extends Component {
  render() {
    return (
      <div>
        <p>{this.props.textToDisplay}</p>
      </div>
    );
  }
}

export default TodoBanner;

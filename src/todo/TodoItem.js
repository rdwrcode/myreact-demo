import React, { Component } from 'react'; 

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    return(
      <div>
        <p>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isChecked}
          />
          {this.props.todoItem}
        </p>
      </div>
    );
  } 
}

export default TodoItem;

import React, { Component } from 'react'; 

class TodoList extends Component{

  handleDone(index) {
    this.props.cb(index);
  }

  createItem(item){
    return (
      <li className="item" key={item.id} 
        onClick={this.handleDone.bind(this, item.id)}
        style={item.done ? {textDecoration: 'line-through'} : {color: 'black'}}
        >
        {item.text}
      </li>
    );
  }

  render(){
    const items = this.props.items;
    if (items === undefined) {
      return (
        <ul></ul>
      )
    } else {
      return(
      <ul>{items.map((item) => this.createItem(item))}</ul>
      );
    }
  }
}

export default TodoList;

import React, { Component } from 'react'; 
//import TodoItem from './TodoItem'; 
/*
class TodoList extends Component {
  
  renderList(item) {
    return(
      <TodoItem key={item} todoItem={item}/>
    )
  }

  render() {

    const listData = [
      'Read',
      'write',
      'code', 
      'dump'
    ];

    return(
      <div>
        <p>Todo List</p>
        {listData.map((item) => this.renderList(item))}
      </div>
    );
  } 
}
*/

class TodoList extends Component{

  createItem(item){
    return (
      <li key={item.id}>{item.text}</li>
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

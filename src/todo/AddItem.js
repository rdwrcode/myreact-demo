import React, { Component } from 'react';
import TodoList from './TodoList';

class AddItem extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      text: ''
    };
  }

  onChange(e){
    this.setState({ text: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = { 
      text: this.state.text,
      id: Date.now()    
    }

    const copyItems = [].concat(this.state.items); 
    copyItems.push(newItem);

    this.setState({
      items: copyItems,
      text: ''
    });
  }

  render(){
    return(
      <div>
        <TodoList items={this.state.items} />
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.onChange(event)} value={this.state.text} />
          <button>{'Add Todo #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
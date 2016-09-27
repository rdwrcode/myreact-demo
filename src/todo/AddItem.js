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

  handleItemClicked(index) {
    console.log(index);
    this.state.items.forEach(o => {
      if(o.id === index) {
        o.done = true;
        console.log(index+" inside");
      }
    });
    this.setState({items: this.state.items});
    console.log(this.state.items);
  }

  onChange(e){
    this.setState({ text: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = { 
      text: this.state.text,
      id: Date.now(),
      done: false    
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
        <TodoList items={this.state.items} cb={this.handleItemClicked.bind(this)}/>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.onChange(event)} value={this.state.text} />
          <button>{'Add Todo #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

export default AddItem;
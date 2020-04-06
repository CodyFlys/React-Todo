import React from 'react';
import './components/Todo.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const list = [
  {
    task: 'Do Dishes',
    id: 123,
    completed: false
  },
  {
    task: 'Vacuum',
    id: 124,
    completed: false
  },
  {
    task: 'Sweep',
    id: 1235,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list
    };
  }


  addTask = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      list: this.state.list.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  clearTask = e => {
    e.preventDefault();
    // if item is purchased (item.purchased is true) then filter out
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <TodoList 
        list={this.state.list}
        toggleItem={this.toggleItem}
        clearTask={this.clearTask}
        />
        <TodoForm addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;

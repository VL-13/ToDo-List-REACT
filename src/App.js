import React, { Component } from 'react';
import { TodoList } from './Components/TodoList';
import { Button } from './Components/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    }
  }


  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({ input: value })
  }


  handleAddItem = () => {
    if (this.state.input.length === 0) {
      return alert("You must write something!");
    }
    const newItem = {
      id: new Date(),
      text: this.state.input,
      status: false
    }
    this.setState({
      input: '',
      todos: this.state.todos.concat(newItem)
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })

  }

  handleItemStatusToggle = (itemId) => {
    const tempState = this.state.todos.map(todo => {
      if (todo.id === itemId) {
        todo.status = !todo.status
      }
      return todo;
    })
    this.setState({
      todos: tempState
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }

  handleItemRemove = (itemId) => {
    const tempState = this.state.todos.filter(todo => {
      if (todo.id !== itemId) {
        return todo
      }
    })
    this.setState({
      todos: tempState
    }, () => {
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    })
  }


  render() {
    return (
      <div className="container">
        <h1>Things To Do:</h1>
        <hr />
        <div className="todo-component">
          <div className="todo-component__control">
            <div className="todo-component__input-group">
              <input onChange={this.handleChangeInput} value={this.state.input} type="text" id="todo-input" placeholder="Type your todo list" />
              {this.state.input.length ? (
                <span id="input-count">Characters count: {this.state.input.length}</span>
              ) : null}
              <span id="total"></span>
              <span id="total-done"></span>
            </div>
            <Button onClick={this.handleAddItem} id="todo-add" ><strong>+</strong></Button>
          </div>
          <TodoList handleItemRemove={this.handleItemRemove} handleItemStatusToggle={this.handleItemStatusToggle} todos={this.state.todos} />
        </div>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
      </div>
    );
  }
}

export default App;
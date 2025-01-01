import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0;
let getId = () => ++id;

const initialTodos = [
  { id: getId(), name: "Walk the dog", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have Fun", completed: false },
];

export default class App extends React.Component {
  state = {
    todos: initialTodos, 
  };
  
  addTodo = (name) => {
    this.setState((prevState) => ({
      todos: [...prevState.todos, { id: getId(), completed: false, name }],
    }));
  };

  toggleCompletion = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((td) => {
        if (id === td.id) {
          return { ...td, completed: !td.completed }; 
        }
        return td;
      }),
    }));
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion} />
        <Form addTodo={this.addTodo} />
      </div>
    );
  }
}
   


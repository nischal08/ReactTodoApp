import React, { Component } from 'react';
import './TodoApp.css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './Navbar';
import TodoList from './TodoList';
import AddForm from './AddForm';

class TodoApp extends Component {
	state = {
		todos: [ { id: 1, content: 'Learn react js' }, { id: 2, content: 'watch movie' } ]
	}

	addTodo = (todo) =>{
		const todos = [...this.state.todos, todo]; //spread operator
		this.setState({todos});
	}

	deleteTodo = (id) =>{
		const todos = this.state.todos.filter(todo => todo.id != id);
		this.setState({todos});
	}

	render() {
		const {todos} = this.state;
		return (
			<div className="App">
				<Navbar />
				<div className="container">
					<TodoList deleteTodo={this.deleteTodo} todos={todos} />
					<AddForm addTodo={this.addTodo}/>

				</div>
			</div>
		);
	}
}

export default TodoApp;

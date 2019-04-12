import React, { Component } from "react";
import TodoContext from "../context/TodoContext";

export default class TodoDetails extends Component {
  render() {
    return (
      <TodoContext.Consumer>
        {context => (
          <div>
            {context.todos.map(todo => {
              if ((todo.id == this.props.match.params.todoId)) {
                  console.log(todo);
                return (
                  <div key={todo.id}>
                    <p>{todo.content}</p>
                  </div>    
                );
              }
            })}
          </div>
        )}
      </TodoContext.Consumer>
    );
  }
}

import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className="collection">
      {todos.length > 0 ? (
        todos.map(todo => (
          <p key={todo.id} className="collection-item">
            <span onClick={e => deleteTodo(todo.id)}>{todos.context}</span>
            {todo.content}
            <Link to={"/todo/" + todo.id}>
              <span className="waves-effect waves-light btn">View</span>
            </Link>
          </p>
        ))
      ) : (
        <p>Your Todos is empty...</p>
      )}
    </div>
  );
};
export default TodoList;

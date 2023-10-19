import React, { useState } from "react";
import { connect } from "react-redux";

import Button from 'react-bootstrap/Button';

import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons" >
        <Button variant="danger" 
            onClick={() => setSort("active")}>Active</Button>
        <Button variant="success"
            onClick={() => setSort("completed")}>Completed</Button>
        <Button variant="light"
            onClick={() => setSort("all")}>All</Button>
      </div>
      <ul>
        {props.todos.length > 0 &&
          (sort === "active" || sort === "completed" || sort === "all") &&
          props.todos.map((item) => {
            if (
              (sort === "active" && !item.completed) ||
              (sort === "completed" && item.completed) ||
              sort === "all"
            ) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);

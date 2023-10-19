import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import {
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const DisplayTodos = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("active");

  return (
    <div className="displaytodos">
      <div className="buttons" >
        <Button variant="danger" onClick={() => setSort("active")}>Active</Button>
        <Button variant="success" onClick={() => setSort("completed")}>Completed</Button>
        <Button variant="light" onClick={() => setSort("all")}>All</Button>
      </div>
      <ul>
        {todos.length > 0 &&
          (sort === "active" || sort === "completed" || sort === "all") &&
          todos.map((item) => {
            if (
              (sort === "active" && !item.completed) ||
              (sort === "completed" && item.completed) ||
              sort === "all"
            ) {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={() => dispatch(removeTodos(item.id))}
                  updateTodo={(updatedItem) => dispatch(updateTodos(updatedItem))}
                  completeTodo={() => dispatch(completeTodos(item.id))}
                />
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
};

export default DisplayTodos;

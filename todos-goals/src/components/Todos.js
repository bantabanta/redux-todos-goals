import {connect} from 'react-redux';
import React from "react";
import { useRef } from "react";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo,
} from "../actions/todos";
import List from "./List";

const Todos = (props) => {
  const inputRef = useRef();

  const addItem = (e) => {
    e.preventDefault();

    props.dispatch(
      handleAddTodo(
        inputRef.current.value,
        () => (inputRef.current.value = "")
      )
    );
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    props.dispatch(handleToggleTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Add Todo" ref={inputRef} />
      <button onClick={addItem}>Add Todo</button>
      <List toggle={toggleItem} remove={removeItem} items={props.todos} />
    </div>
  );
};

export default connect((state) => ({
  todos: state.todos,
}))(Todos);

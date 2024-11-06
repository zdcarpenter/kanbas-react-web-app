import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todoReducer";

export default function TodoForm() {
    const { todo } = useSelector((state: any) => state.todoReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item">
        <button onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click" className="btn btn-success"> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click" className="btn btn-warning"> Update </button>
        <input value={todo.title} className="form-control"
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      </li>
  );}
  
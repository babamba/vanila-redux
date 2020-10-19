import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const Todo = ({ text, id, onButtonClick }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={() => dispatch(remove(id))}>Del</button>
    </li>
  );
};

export default Todo;

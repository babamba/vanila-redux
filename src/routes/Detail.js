import React from "react";
import { useSelector } from "react-redux";

const Detail = ({ match }) => {
  const findTodo = useSelector((state) =>
    state.todos.find((todoItem) => todoItem.id === parseInt(match.params.id))
  );

  return (
    <>
      <h1>{findTodo?.text}</h1>
      <h5> created at : {findTodo?.id}</h5>
    </>
  );
};
export default Detail;

import React from "react";
import { connect } from "react-redux";

const Detail = ({ todo }) => {
  console.log("todo : ", todo);
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5> created at : {todo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { todo: state.find((todo) => todo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);

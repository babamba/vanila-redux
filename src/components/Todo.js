import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

const Todo = ({ text, id, onButtonClick }) => {
  console.log("text : ", text);
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onButtonClick}>Del</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => dispatch(remove(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);

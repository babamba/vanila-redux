import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/Todo";
import { add } from "../store/todo";

function Home(props) {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <>
      <h1>To do </h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <Todo text={item.text} id={item.id} key={item.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import { initStorage } from "../store/todo";

const App = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);

  useEffect(() => {
    if (todos.length === 0) dispatch(initStorage());
  }, [todos, dispatch]);

  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={Detail} />
    </Router>
  );
};

export default App;

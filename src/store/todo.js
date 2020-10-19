import {
  //   createAction,
  //   createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//   [addTodo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteTodo]: (state, action) =>
//     state.filter((todo) => todo.id !== action.payload),
// });

const initialtodo = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialtodo,
  reducers: {
    initStorage: () => {
      localStorage.setItem("todos", JSON.stringify([]));
    },
    add: (state, action) => {
      const data = {
        text: action.payload,
        id: Date.now(),
      };
      const todos = JSON.parse(localStorage.getItem("todos"));
      todos.push(data);
      localStorage.setItem("todos", JSON.stringify(todos));
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      const todos = JSON.parse(localStorage.getItem("todos"));
      const newTodo = todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newTodo));
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// initialState: initialtodo,
// reducers: {
//   initStorage: () => {
//     localStorage.setItem("todos", JSON.stringify([]));
//   },
//   add: (state, action) => {
//     const data = {
//       text: action.payload,
//       id: Date.now(),
//     };

const { actions, reducer } = todoSlice;
export const { add, remove, initStorage } = actions;

export default reducer;

// export default configureStore({ reducer: todo.reducer });

import {
  configureStore,
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

const todo = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((todo) => todo.id !== action.payload),
  },
});

export const { add, remove } = todo.actions;

export default configureStore({ reducer: todo.reducer });

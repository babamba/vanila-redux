import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";
const countModifier = (count = 0, action) => {
  //   console.log("count : ", count);
  //   console.log("action : ", action);
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => (number.innerText = countStore.getState());
countStore.subscribe(onChange);

const handleAdd = () => countStore.dispatch({ type: ADD });
const handleMinus = () => countStore.dispatch({ type: MINUS });

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   console.log("add");
//   count = count + 1;
//   updateText();
// };

// const handleMinus = () => {
//   console.log("minus");
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
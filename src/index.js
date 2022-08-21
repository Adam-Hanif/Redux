import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useSelector } from "react-redux";
import { createStore } from "redux";
import App from "./App";
const intialState = 0;
const reducer = (state = intialState, action) => {
  // if (action.type === "plus") {
  //   return state + 1;
  // }
  // if (state < 1) {
  //   return 0;
  // }
  // if (action.type === "minus") {
  //   return state - 1;
  // }
  // if (action.type === "reset") {
  //   return 0;
  // }
  switch (action.type) {
    case "plus":
      return state + action.payload;
    case "minus":
      return state - 1;
    case "reset":
      return 0;

    default:
      return state;
  }
};
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

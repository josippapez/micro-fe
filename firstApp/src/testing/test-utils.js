import { render as rtlRender } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
// Import your own reducer
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../store/reducers/reducer";

let store = null;
let actions = [];

function render(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    store = configureStore({ reducer: reducers, preloadedState: initialState });
    store.dispatch = jest.fn(action => {
      if (action?.type) {
        actions.push(action.type);
      }
    });
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

function resetActions() {
  actions = [];
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render, store, actions, resetActions };

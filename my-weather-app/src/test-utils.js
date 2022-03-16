import React from "react";
import { render as rtlRender } from "@testing-library/react";
// import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import { rootReducer, RootState } from "./store/redusers/index.ts";
// import { useTypeSelector } from "./hooks/useTypeSelector";
import { createStore, applyMiddleware } from "redux";
import { rootReduser } from "./store/redusers/index.ts";
import { composeWithDevTools } from "redux-devtools-extension";

export const render = (
  ui,
  {
    initialState,
    // store = configureStore({reducer: rootReducer, initialState}),
    store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk))),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

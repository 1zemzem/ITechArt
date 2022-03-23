import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReduser } from "./store/redusers/index.ts";

export const render = (
  ui,
  {
    initialState,
    store = createStore(rootReduser, initialState),   
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export const thunk =
  ({ dispatch, getState }) =>
  next =>
  action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }

  export const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
  }
export * from "@testing-library/react";

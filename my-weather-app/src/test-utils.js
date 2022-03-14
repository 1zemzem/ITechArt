import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { rootReducer } from "./store/redusers/index.ts";
import { useTypeSelector } from "./hooks/useTypeSelector";

export const render = (
  ui,
  {
    initialState,
    store = configureStore({reducer: rootReducer, initialState}),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

import React from "react";
import { render, screen } from "../../test-utils";
import Main from "./main.tsx";

describe("Main", () => {
  const initialState = {
    data: {
      isLoaded: false,
      error: false,
      show: true,
    }
      }
  it("should display id", () => {
    render(<Main />, initialState);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});


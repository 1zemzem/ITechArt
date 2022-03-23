import React from "react";
import { render, screen } from "../../test-utils";
import Main from "./main.tsx";

describe("Main", () => {
  it("should display id", () => {
    const initialState = {
      data: {
        isLoaded: false,
        error: false,
        show: true,
      },
    };
    render(<Main />, initialState);
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });
});

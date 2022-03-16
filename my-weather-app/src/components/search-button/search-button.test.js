import React from "react";
import { render, screen } from "../../test-utils";
import SearchButton from "./search-button.tsx";

describe("SearchButton", () => {
  render(<SearchButton />);
  it("should display id", () => {
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });
});

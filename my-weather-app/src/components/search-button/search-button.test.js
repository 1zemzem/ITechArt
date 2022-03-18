import React from "react";
import { render, screen } from "../../test-utils";
import SearchButton from "./search-button.tsx";

describe("SearchButton", () => {
  it("should display id", () => {
    render(<SearchButton />);
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });
});

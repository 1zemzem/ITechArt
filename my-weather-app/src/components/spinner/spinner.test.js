import { render, screen } from "@testing-library/react";
import Spinner from "./spinner.tsx";

describe("Spinner component", () => {
  render(<Spinner />);
  it("Spinner renders", () => {
    expect(screen.getByTestId("spiner")).toBeInTheDocument();
  });
});

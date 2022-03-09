/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Main from "./main.tsx";

describe("Main component", () => {
  const defaultProps = { error, isLoaded, show };

  const { getByTestId } = render(<Main {...defaultProps} />);

  it("Should render Main", async() => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("main")).toBeInTheDocument();
    expect(screen.getByText(/Weather App/i)).toBeInTheDocument();    
  });




});

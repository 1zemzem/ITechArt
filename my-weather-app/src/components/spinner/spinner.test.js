
import { render, screen } from "@testing-library/react";
import Spinner from './spinner.tsx'


describe("Spinner component", () => {
  it("Spinner renders", () => {
    render(<Spinner />);    
    const linkElement = screen.getByTestId(111)
    expect(linkElement).toBeInTheDocument();
  });
});
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("Home Component", () => {
    // smoke test
    test("renders without crashing", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
    });

    // snapshot test 
    test("matches snapshot", () => {
      const { asFragment } = render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
      expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText h1
    test("heading tag is displayed correctly", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      );
      const heading1 = screen.getByText("hey, I'm Danny", {
        exact: false
      });
      expect(heading1).toBeInTheDocument(); 
    });
}); 
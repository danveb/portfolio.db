import { render, screen } from "@testing-library/react"; 
import Navbar from "../../components/Navbar"; 
import { BrowserRouter } from "react-router-dom";

describe("Navbar component", () => {
  // smoke test
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByText
  test("should display the anchor tag", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    ); 
    const anchor = screen.getByText("resume"); 
    expect(anchor).toBeInTheDocument(); 
    expect(anchor).not.toHaveClass("resume"); 
  });
});

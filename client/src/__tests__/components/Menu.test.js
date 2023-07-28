import { render, screen } from "@testing-library/react"; 
import Menu from "../../components/Menu"; 
import { BrowserRouter } from "react-router-dom";

describe("Menu component", () => {
  // smoke test
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByText
  test("should display the anchor tag", () => {
    render(
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
    ); 
    const anchor = screen.getByText("resume"); 
    expect(anchor).toBeInTheDocument(); 
    expect(anchor).not.toHaveClass("world"); 
  });
});
import { render, screen, fireEvent } from "@testing-library/react"; 
import Menu from "../../components/Menu"; 
import { BrowserRouter } from "react-router-dom";

// mockProps 
const mockProps = {
  menuOpen: true, 
  setMenuOpen: jest.fn(), 
}; 

describe("Menu component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Menu {...mockProps} />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Menu {...mockProps} />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByText
  test("should display the anchor tag", () => {
    render(
      <BrowserRouter>
        <Menu {...mockProps} />
      </BrowserRouter>
    ); 
    const anchor = screen.getByText("resume"); 
    expect(anchor).toBeInTheDocument(); 
    expect(anchor).not.toHaveClass("active"); 
  });

  // menu is open 
  test("renders an open hamburger menu", () => {
    render(
      <BrowserRouter>
        <Menu {...mockProps} />
      </BrowserRouter>
    ); 
    const testId = screen.getByTestId("menuId"); 
    expect(testId).toHaveClass("active"); 
  }); 

  // fire an event by clicking a nav link and menu closes
  test("hamburger menu will close after clicking a link", () => {
    render(
      <BrowserRouter>
        <Menu {...mockProps} />
      </BrowserRouter>
    );
    // fireEvent 
    const link = screen.getByText("contact");
    fireEvent.click(link); 
    expect(mockProps.setMenuOpen).toHaveBeenCalledTimes(1); 
    expect(link).not.toHaveClass("active"); 
  });
});
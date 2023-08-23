import { render, screen, fireEvent } from "@testing-library/react"; 
import Navbar from "../../components/Navbar"; 
import { BrowserRouter } from "react-router-dom";

// mockProps
const mockProps = {
  menuOpen: false, 
  setMenuOpen: jest.fn(), 
}; 

describe("Navbar component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Navbar {...mockProps} />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Navbar {...mockProps} />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByText
  test("should display the anchor tag", () => {
    render(
      <BrowserRouter>
        <Navbar {...mockProps} />
      </BrowserRouter>
    ); 
    const anchor = screen.getByText("resume"); 
    expect(anchor).toBeInTheDocument(); 
    expect(anchor).not.toHaveClass("resume"); 
  });

  // getByTestId 
  test("renders with testId", () => {
    render(
      <BrowserRouter>
        <Navbar {...mockProps} />
      </BrowserRouter>
    ); 
    const testId = screen.getByTestId("navbarId"); 
    expect(testId).toBeInTheDocument(); 
  }); 

  // fireEvent on hamburger menu
  test("click event on hamburger menu", () => {
    render(
      <BrowserRouter>
        <Navbar {...mockProps} /> 
      </BrowserRouter>
    );
    const hamburgerMenu = screen.getByTestId("hamburger"); 
    fireEvent.click(hamburgerMenu);  
    expect(mockProps.setMenuOpen).toHaveBeenCalledTimes(1); 
  }); 
});

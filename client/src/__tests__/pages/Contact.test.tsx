import { render, screen } from "@testing-library/react"; 
import Contact from "../../pages/Contact"; 
import { BrowserRouter } from "react-router-dom";

describe("Contact component", () => {
  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

    // getByText
  test("should display the title", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    ); 
    const title = screen.getByText("send me a note", {
      exact: false
    }); 
    expect(title).toBeInTheDocument(); 
  });

  // getByText 
  test("should display a p tag", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    ); 
    const pTag = screen.getByText("Chicago", { exact: false }); 
    expect(pTag).toBeInTheDocument(); 
  });
});
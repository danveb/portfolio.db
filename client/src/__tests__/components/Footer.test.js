import { render, screen } from "@testing-library/react"; 
import Footer from "../../components/Footer"; 
import { BrowserRouter } from "react-router-dom";

describe("Footer component", () => {
  // smoke test
  test("renders component wtesthout crashing", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    ); 
  });

  // snapshot test 
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  // getByAlt
  test("should display total 3 social icons alt text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const altText = screen.getAllByAltText("social icon"); 
    // console.log(altText); // ARRAY 
    expect(altText.length).toBe(3); 
    expect(altText.length).not.toBe(100); 
  });
})
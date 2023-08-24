import { render } from "@testing-library/react"; 
import ScrollToTop from "../../components/ScrollToTop"; 
import { BrowserRouter } from "react-router-dom";

describe("ScrollToTop component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    ); 
  }); 
  
  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ScrollToTop />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });
});
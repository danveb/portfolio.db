import { render, screen } from "@testing-library/react"; 
import Button from "../../components/Button"; 
import { BrowserRouter } from "react-router-dom";

// mocking...
// jest.mock("../../components/Button", () => {
//   return jest.fn(() => null) ; 
// }); 

// mocking v2 (hardcoding?) 
jest.mock("../../components/Button", () => (props) => {
  return <button data-testid="button">
    <a href={props.url} >
      {props.title}
      <img src={props.img} alt={props.alt} />
    </a>
  </button>
})

describe("Button component", () => {
  // smoke test
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByTestId
  test("matches test id", () => {
    render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>
    );
    const testId = screen.getByTestId("button"); 
    expect(testId).toBeInTheDocument(); 
  });
});
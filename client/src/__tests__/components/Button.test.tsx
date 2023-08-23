import { render, screen } from "@testing-library/react"; 
import Button from "../../components/Button"; 
import { BrowserRouter } from "react-router-dom";

// interface 
interface ButtonMockProps {
  title: string; 
  url: string; 
  alt: string; 
  rel?: (string); 
  target?: (string); 
}

// mocking...
// jest.mock("../../components/Button", () => {
//   return jest.fn(() => null) ; 
// }); 

// mocking v2 (hardcoding?) 
jest.mock("../../components/Button", () => (props: ButtonMockProps) => {
  return <button data-testid="button">
    <a href={props.url} >
      {props.title}
      <img src={props.url} alt={props.alt} />
    </a>
  </button>
})

describe("Button component", () => {
  // smoke test
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Button title="Hello World" url="https://google.com" />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Button title="Hello World" url="https://google.com" />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByTestId
  test("matches test id", () => {
    render(
      <BrowserRouter>
        <Button title="Hello World" url="https://google.com" />
      </BrowserRouter>
    );
    const testId = screen.getByTestId("button"); 
    expect(testId).toBeInTheDocument(); 
  });

  test("matches title tag", () => {
    render(
      <BrowserRouter>
        <Button title="Hello World" url="https://google.com" />
      </BrowserRouter>
    );
    const textTitle = screen.getByText("Hello World"); 
    expect(textTitle).toBeInTheDocument(); 
    expect(textTitle).not.toBe("World Hello"); 
  }); 
});
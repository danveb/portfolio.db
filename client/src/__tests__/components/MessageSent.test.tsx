import { render, screen } from "@testing-library/react"; 
import MessageSent from "../../components/MessageSent"; 
import { BrowserRouter } from "react-router-dom";

describe("MessageSent component", () => {
  // smoke test
  test("renders component wtesthout crashing", () => {
    render(
      <BrowserRouter>
        <MessageSent />
      </BrowserRouter>
    ); 
  });

  // snapshot test 
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <MessageSent />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  // getByText
  test("heading tag is displayed correctly", () => {
    render(
      <BrowserRouter>
        <MessageSent />
      </BrowserRouter>
    );
    const heading1 = screen.getByText("thanks a lot", {
      exact: false
    });
    expect(heading1).toBeInTheDocument(); 
  });
})
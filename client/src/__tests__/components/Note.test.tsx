import { render, screen } from "@testing-library/react"; 
import Note from "../../components/Note"; 
import { BrowserRouter } from "react-router-dom";

describe("Note component", () => {
  // smoke test
  test("renders component wtesthout crashing", () => {
    render(
      <BrowserRouter>
        <Note />
      </BrowserRouter>
    ); 
  });

  // snapshot test 
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Note />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  }); 

  // getByLabelText
  test("name, email and message labels are properly displayed on contact form", () => {
    render(
      <BrowserRouter>
        <Note />
      </BrowserRouter>
    ); 
    const nameLabel = screen.getByLabelText("Name"); 
    const emailLabel = screen.getByLabelText("Email"); 
    const messageLabel = screen.getByLabelText("Message"); 
    expect(nameLabel).toBeInTheDocument(); 
    expect(emailLabel).toBeInTheDocument(); 
    expect(messageLabel).toBeInTheDocument(); 
  }); 
})
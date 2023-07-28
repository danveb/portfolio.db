import { render, screen } from "@testing-library/react"; 
import ProjectList from "../../components/ProjectList"; 
import { BrowserRouter } from "react-router-dom";

describe("ProjectList component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProjectList />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ProjectList />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByTestId
  test("matches test id", () => {
    render(
      <BrowserRouter>
        <ProjectList />
      </BrowserRouter>
    );
    const testId = screen.getByTestId("projectList"); 
    expect(testId).toBeInTheDocument(); 
    expect(testId).not.toBe("projectDetail"); 
  });
});
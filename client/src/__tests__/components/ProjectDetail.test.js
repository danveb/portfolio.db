import { render, screen } from "@testing-library/react"; 
import ProjectDetail from "../../components/ProjectDetail"; 
import { BrowserRouter } from "react-router-dom";

describe("ProjectDetail component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByTestId
  test("matches test id", () => {
    render(
      <BrowserRouter>
        <ProjectDetail />
      </BrowserRouter>
    );
    const testId = screen.getByTestId("projectDetail"); 
    expect(testId).toBeInTheDocument(); 
    expect(testId).not.toBe("Project Detail"); 
  });
});
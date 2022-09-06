import { render } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";
import Projects from "../components/Projects/Projects"; 

// smoke test
it("renders without crashing", () => {
    render(<Projects />); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<Projects />); 
    expect(asFragment()).toMatchSnapshot(); 
});

// getByText
// <h1>{project.title}</h1>
test("should display the header tag", () => {
    const { getByText } = render(<Projects />); 
    const header = getByText("bobaLife"); 
    expect(header).toBeInTheDocument(); 
});

// <div id="projects" className="projects">...<div>
test("should have class projects", () => {
    const { container } = render(<Projects />); 
    const projects = container.getElementsByClassName("projects"); 
    expect(projects.length).toBe(1); 
}); 
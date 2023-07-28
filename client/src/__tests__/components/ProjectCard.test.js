import { render, screen } from "@testing-library/react"; 
import ProjectCard from "../../components/ProjectCard"; 
import { BrowserRouter } from "react-router-dom";

// sample props to be passed down 
const props = {
  img: "image",
  alt: "project snapshot", 
  title: "Hello World", 
  description: "This is a mock description",
}; 

// jest.mock
jest.mock("../../components/ProjectCard", () => (props) => {
  return <div className="projectCard__card" data-testid="projectCard">
    <img src={props.img} alt={props.alt} />
    <h2>{props.title}</h2>
    <p>{props.description}</p>
  </div>
})

describe("ProjectCard component", () => {
  // smoke test
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProjectCard />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ProjectCard />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByTestId
  test("matches test id", () => {
    render(
      <BrowserRouter>
        <ProjectCard props={props} />
      </BrowserRouter>
    );
    const testId = screen.getByTestId("projectCard"); 
    expect(testId).toBeInTheDocument(); 
  });
});


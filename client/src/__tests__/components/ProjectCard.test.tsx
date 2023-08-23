import { render, screen } from "@testing-library/react"; 
import ProjectCard from "../../components/ProjectCard"; 
import { BrowserRouter } from "react-router-dom";
import asador from "../../assets/projects/asador.png"; 

// mockProps interface
interface mockProps {
  img: string;
  alt: string;
  title: string; 
  description: string; 
}

// sample props to be passed down 
const props = {
  img: "image",
  alt: "project snapshot", 
  title: "Hello World", 
  description: "This is a mock description",
}; 

// jest.mock
jest.mock("../../components/ProjectCard", () => (props: mockProps) => {
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
        <ProjectCard img={props.img} alt={props.alt} title={props.title} description={props.description} />
      </BrowserRouter>
    ); 
  }); 

  // snapshot test
  test("matches snapshot", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <ProjectCard img={props.img} alt={props.alt} title={props.title} description={props.description} />
      </BrowserRouter>
    ); 
    expect(asFragment()).toMatchSnapshot(); 
  });

  // getByTestId
  test("matches test id", () => {
    render(
      <BrowserRouter>
        <ProjectCard img={asador} alt="asador project" title="Asador" description="Description about asador" />
      </BrowserRouter>
    );
    const testId = screen.getByTestId("projectCard"); 
    expect(testId).toBeInTheDocument(); 
  });
});


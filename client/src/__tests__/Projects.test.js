import { render, screen } from "@testing-library/react"; 
import { Projects } from "../components";

describe("Projects component", () => {
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
    test("should display the correct title of bobaLife project", () => {
        render(<Projects />); 
        const title = screen.getByText("bobaLife"); 
        expect(title).not.toBe("bobalife"); 
    });

    // getByText
    test("should read a piece of description of bobaLife project", () => {
        render(<Projects />); 
        const description = screen.getByText("bobaLife is an e-commerce web app", { exact: false }); 
        expect(description).toBeInTheDocument(); 
    });

    // getByRole 
    test("should display more than 20 tags", () => {
        render(<Projects />); 
        const tags = screen.getAllByRole("button"); 
        expect(tags.length).toBeGreaterThan(20); 
    });

    // getElementsByClassName
    test("project cards should display 5 external links to GitHub", () => {
        render(<Projects />); 
        const projects = screen.getAllByRole("link", { name: /GitHub Repo/i }); 
        expect(projects.length).toBeGreaterThan(4); 
    }); 
}); 
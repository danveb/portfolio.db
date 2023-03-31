import { render, screen } from "@testing-library/react"; 
import { About } from "../components"; 

describe("About component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<About />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<About />); 
        expect(asFragment()).toMatchSnapshot(); 
    }); 

    // getByText 
    test("should display correct title", () => {
        render(<About />);
        const text = screen.getByText("My Story", { exact: true }); 
        expect(text).toBeInTheDocument(); 
    });

    // getByAltText 
    test("should display html logo alt", () => {
        render(<About />); 
        const altText = screen.getByAltText("html logo"); 
        expect(altText).toBeInTheDocument(); 
    }); 
});
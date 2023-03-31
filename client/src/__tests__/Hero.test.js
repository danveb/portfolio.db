import { render, screen } from "@testing-library/react"; 
import { Hero } from "../components";

describe("Hero component", () => {
    // smoke test
    it("renders without crashing", () => {
        render(<Hero />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Hero />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display the headline", () => {
        render(<Hero />); 
        const headline = screen.getByText("Frontend Developer", { exact: true }); 
        expect(headline).not.toBe("Front End Developer"); 
    }); 

    // getByAltText
    test("should have alt attribute for img", () => {
        render(<Hero />); 
        const alt = screen.getByAltText("laptop hero"); 
        expect(alt).toBeInTheDocument(); 
    }); 
});
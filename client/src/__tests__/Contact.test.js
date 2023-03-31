import { render, screen } from "@testing-library/react"; 
import { Contact } from "../components";

describe("Contact component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<Contact />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Contact />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display the title", () => {
        render(<Contact />); 
        const title = screen.getByText("Send Me A Note"); 
        expect(title).toBeInTheDocument(); 
    });

    // getByText 
    test("should display the anchor tag", () => {
        render(<Contact />); 
        const anchor = screen.getByText("Say Hello", { exact: true }); 
        expect(anchor).toHaveClass("cta"); 
        // expect(anchor).toBeInTheDocument(); 
    });

});
import { render, screen } from "@testing-library/react"; 
import Navbar from "../components/Navbar/Navbar"; 

describe("Navbar component", () => {
    // smoke test
    it("renders without crashing", () => {
        render(<Navbar />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Navbar />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display the anchor tag", () => {
        render(<Navbar />); 
        const anchor = screen.getByText("resume"); 
        expect(anchor).toBeInTheDocument(); 
        expect(anchor).not.toHaveClass("resume"); 
    });
});

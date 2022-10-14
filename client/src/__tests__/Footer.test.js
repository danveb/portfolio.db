import { render, screen } from "@testing-library/react"; 
import Footer from "../components/Footer/Footer"; 

describe("Footer component", () => {
    // smoke test
    it("renders without crashing", () => {
        render(<Footer />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Footer />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText 
    test("should display title", () => {
        render(<Footer />); 
        const title = screen.getByText("Social Links"); 
        expect(title).toBeInTheDocument(); 
    });
});
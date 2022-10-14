import { render, screen } from "@testing-library/react"; 
import Menu from "../components/Menu/Menu"; 

describe("Menu component", () => {
    // smoke test
    it("renders without crashing", () => {
        render(<Menu />); 
    }); 

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<Menu />); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test("should display the anchor tag", () => {
        render(<Menu />); 
        const anchor = screen.getByText("resume"); 
        expect(anchor).toBeInTheDocument(); 
        expect(anchor).not.toHaveClass("world"); 
    });
});
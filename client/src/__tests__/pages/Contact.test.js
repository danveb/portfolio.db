import { render, screen } from "@testing-library/react"; 
import Contact from "../../pages/Contact"; 
import { BrowserRouter } from "react-router-dom";

describe("Contact component", () => {
    // snapshot test
    test.skip("matches snapshot", () => {
        const { asFragment } = render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        ); 
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByText
    test.skip("should display the title", () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        ); 
        const title = screen.getByText("send me a note", {
            exact: false
        }); 
        expect(title).toBeInTheDocument(); 
    });

    // getByText 
    test.skip("should display the anchor tag", () => {
        render(
            <BrowserRouter>
                <Contact />
            </BrowserRouter>
        ); 
        const anchor = screen.getByText("Say Hello", { exact: true }); 
        expect(anchor).toHaveClass("cta"); 
        // expect(anchor).toBeInTheDocument(); 
    });
});
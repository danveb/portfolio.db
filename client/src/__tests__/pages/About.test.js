import { render, screen } from "@testing-library/react";
import About from "../../pages/About";
import { BrowserRouter } from "react-router-dom";

describe("About Component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
    });

    // snapshot test 
    test("matches snapshot", () => {
        const { asFragment } = render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot(); 
    });

    // getByAltText
    test("img tag has attribute for screen readers", () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        const altText = screen.getByAltText("jest logo"); 
        expect(altText).toBeInTheDocument(); 
    });

    // getByText h1
    test("heading tag is displayed correctly", () => {
        render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        const heading1 = screen.getByText("this is my story", {
            exact: false
        });
        expect(heading1).toBeInTheDocument(); 
    });
}); 
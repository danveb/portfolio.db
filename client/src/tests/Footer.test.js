import { render, screen } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";
import Footer from "../components/Footer/Footer"; 

// smoke test
it("renders without crashing", () => {
    render(<Footer />); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<Footer />); 
    expect(asFragment()).toMatchSnapshot(); 
});

// <h1>Social Links<span>.</span></h1>
test("should display the h1 tag", () => {
    const { getByText } = render(<Footer />);
    getByText("Social Links"); 
}); 
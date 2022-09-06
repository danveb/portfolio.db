import { render } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";
import Contact from "../components/Contact/Contact"; 

// smoke test
it("renders without crashing", () => {
    render(<Contact />); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<Contact />); 
    expect(asFragment()).toMatchSnapshot(); 
});

// <h1>Send Me A Note<span>.</span></h1>
test("should display the h1 tag", () => {
    const { getByText } = render(<Contact />);
    getByText("Send Me A Note"); 
}); 

// <a href="mailto:danibae91@gmail.com?subject=👨‍💻  Hi Danny Let's Work Together!" target="_blank" rel="noreferrer noopener" className="cta">Say Hello</a> 
test("should display the anchor tag", () => {
    const { getByText } = render(<Contact />); 
    const anchor = getByText("Say Hello"); 
    expect(anchor).toHaveClass("cta"); 
    expect(anchor).toBeInTheDocument(); 
});
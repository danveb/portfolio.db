import { render } from "@testing-library/react"; 
import About from "../components/About/About"; 

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
// <h3>My Story<span>.</span></h3> 
test("About component getByText", () => {
    const { getByText } = render(<About />); 
    getByText("My Story"); 
}); 

// getByAltText
// <img src={logo.img} alt="html logo" />
test("About component getByAltText", () => {
    const { getByAltText } = render(<About />); 
    getByAltText("html logo"); 
})
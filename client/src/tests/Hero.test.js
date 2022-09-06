import { render, screen } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";
import Hero from "../components/Hero/Hero"; 

// smoke test
it("renders without crashing", () => {
    render(<Hero />); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<Hero />); 
    expect(asFragment()).toMatchSnapshot(); 
});

// <h1>Hi, I'm Danny<span>.</span>
test("should display the h1 tag", () => {
    const { getByText } = render(<Hero />);
    getByText("Hi, I'm Danny", { exact: true }); 
}); 
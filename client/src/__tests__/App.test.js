import { render } from "@testing-library/react"; 
import App from "../App"; 

describe("App component", () => {
    // smoke test
    test("renders without crashing", () => {
        render(<App />); 
    });

    // snapshot test
    test("matches snapshot", () => {
        const { asFragment } = render(<App />); 
        expect(asFragment()).toMatchSnapshot(); 
    });
});
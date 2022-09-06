import { render } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";
import Menu from "../components/Menu/Menu"; 

// smoke test
it("renders without crashing", () => {
    render(<Menu />); 
}); 

// snapshot test
test("matches snapshot", () => {
    const { asFragment } = render(<Menu />); 
    expect(asFragment()).toMatchSnapshot(); 
});

// <a href="https://drive.google.com/file/d/12SyFoMp7IEL_Vkne9W3Akz5Nt0gB9YvE/view?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a>
test("should display the anchor tag", () => {
    const { getByText } = render(<Menu />); 
    const anchor = getByText("resume"); 
    expect(anchor).toBeInTheDocument(); 
});

// <a href="https://drive.google.com/file/d/12SyFoMp7IEL_Vkne9W3Akz5Nt0gB9YvE/view?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a>
test("should display the anchor tag", () => {
    const { getByText } = render(<Menu />); 
    const anchor = getByText("resume"); 
    expect(anchor).not.toHaveClass("resume"); 
});
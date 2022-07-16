import { useState } from "react"; 
import Navbar from "./components/Navbar/Navbar"; 
import Menu from "./components/Menu/Menu"; 
import Hero from "./components/Hero/Hero"; 
import About from "./components/About/About"; 
import "./App.scss"; 

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Hero />
                <About />
            </div>
        </div>
    )
}

export default App
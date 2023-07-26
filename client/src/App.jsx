import { useState } from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages"; 
import { Navbar, Menu, About, Projects, Contact, Footer } from "./components"; 

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Router>
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

import { useState } from "react"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages"; 
import { Navbar, Menu, Footer, ProjectDetail, ScrollToTop } from "./components"; 

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className="app">
            <Router>
                <ScrollToTop />
                <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:id" element={<ProjectDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}

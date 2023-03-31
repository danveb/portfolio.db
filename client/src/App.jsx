import { useState } from "react"; 
import { Navbar, Menu, Hero, About, Projects, Contact, Footer } from "./components"; 
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
                <Projects />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
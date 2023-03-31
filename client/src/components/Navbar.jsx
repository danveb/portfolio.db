import { useEffect } from "react";
import { links } from "../constants/links"; 
import { resumeLink } from "../constants/resume";
import "../styles/Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    // useEffect 
    // when resizing window we'll handle state back to closing mobileMenu/navbar bg
    useEffect(() => {
        const handleResize = () => {
            if(menuOpen) {
                setMenuOpen(!menuOpen); 
            };
        };

        window.addEventListener("resize", handleResize); 

        return () => {
            window.removeEventListener("resize", handleResize); 
        };
    }, [menuOpen, setMenuOpen]);

    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navbar-left">
                <a href="#intro" className="logo">db<span>.</span></a>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                    <li>
                        {resumeLink.map((link) => (
                            <div key={link.id}>
                                <a href={link.url} rel="noopener noreferrer" target="_blank">resume</a>
                            </div>
                        ))}
                    </li>
                </ul>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar
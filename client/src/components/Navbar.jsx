import { useEffect } from "react";
import { Link } from "react-router-dom";
import { links } from "../constants/links"; 
import { resumeLink } from "../constants/resume";
import "../styles/Navbar.scss"; 
import github from "../assets/navbar/github.svg"; 

export default function Navbar({ menuOpen, setMenuOpen }) {
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
            <div className="navbar__wrapper">
                <div className="navbar__left">
                    <Link to="/" className="logo">db<span>.</span></Link>
                </div>
                <div className="navbar__mid">
                    <ul>
                        {links.map((link) => (
                            <li key={link.id}>
                                <Link to={link.url}>{link.text}</Link>
                            </li>
                        ))}
                        {resumeLink.map((link) => (
                            <li key={link.id}>
                                <Link to={link.url} rel="noopener noreferrer" target="_blank">resume</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar__right">
                    <Link to="/">
                        <img className="github-logo" src={github} alt="github logo" />
                    </Link>
                    <div className="hamburger__menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { links } from "../../constants/links"; 
import "./Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="navbar-left">
                <a href="#intro" className="logo">db<span>.</span></a>
                <ul className="navbar-links">
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
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
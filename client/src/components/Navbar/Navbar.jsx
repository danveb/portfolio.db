import { links } from "../../constants/links"; 
import "./Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
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
                        <a href="https://drive.google.com/file/d/12SyFoMp7IEL_Vkne9W3Akz5Nt0gB9YvE/view?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a>
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
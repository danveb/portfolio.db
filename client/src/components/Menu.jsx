import { Link } from "react-router-dom";
import { links } from "../constants/links";
import { socials } from "../constants/socials";
import { resumeLink } from "../constants/resume";
import "../styles/Menu.scss"; 

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {links.map((link)=> (
                    <li key={link.id} onClick={()=> setMenuOpen(!menuOpen)}>
                        <Link href={link.url}>{link.text}</Link>
                    </li>
                ))}
                <li>
                    {resumeLink.map((link) => (
                        <div key={link.id}>
                            <Link href={link.url} rel="noopener noreferrer" target="_blank">resume</Link>
                        </div>
                    ))}
                </li>
            </ul>
            <ul>
                {socials.map((social) => (
                    <li key={social.id}>
                        <Link to={social.url} target={social.target} rel={social.rel}>
                            <img className="social" src={social.img} alt={social.alt} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

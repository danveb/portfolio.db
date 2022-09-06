import { links } from "../../constants/links";
import { socials } from "../../constants/socials";
import { resumeLink } from "../../constants/resume";
import "./Menu.scss"; 

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                {links.map((link)=> (
                    <li key={link.id} onClick={()=> setMenuOpen(!menuOpen)}>
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
            <ul>
                {socials.map((social) => (
                    <li key={social.id}>
                        <a href={social.url} target={social.target} rel={social.rel} className="social">{<social.icon />}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu
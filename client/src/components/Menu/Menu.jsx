import { links } from "../../constants/links";
import { socials } from "../../constants/socials";
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
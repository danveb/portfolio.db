import { Link } from "react-router-dom";
import { links } from "../constants/links";
import { menuSocials } from "../constants/menu";
import { resumeLink } from "../constants/resume";
import "../styles/Menu.css"; 

import { openProps } from "../types";

export default function Menu({ menuOpen, setMenuOpen }: openProps) {
  return (
    <nav data-testid="menuId" className={"menu__nav " + (menuOpen && "active")}>
      <div className="menu">
        <ul>
          {links.map((link)=> (
            <li key={link.id} onClick={()=> setMenuOpen(!menuOpen)}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
          <li>
            {resumeLink.map((link) => (
              <div key={link.id}>
                <Link to={link.url} rel="noopener noreferrer" target="_blank">resume</Link>
              </div>
            ))}
          </li>
        </ul>
        <ul>
          {menuSocials.map((social) => (
            <li key={social.id}>
              <Link to={social.url} target={social.target} rel={social.rel}>
                <img className="social" src={social.img} alt={social.alt} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

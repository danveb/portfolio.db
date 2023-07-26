import { Link } from "react-router-dom";
import { footerSocials } from "../constants/footer";
import "../styles/Footer.css"; 

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__main">
                    <div className="footer__copyright">
                        <p>© All rights reserved – Danny Bae</p>
                    </div>
                    <div className="footer__social__icons">
                        <ul>
                            {footerSocials.map((social) => (
                                <li key={social.id}>
                                    <Link to={social.url} target={social.target} rel={social.rel}>
                                        <img src={social.img} alt={social.alt} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

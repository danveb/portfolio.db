import { socials } from "../../constants/socials"; 
import "./Footer.scss"; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__title">
                    <h1>Social Links<span>.</span></h1>
                </div>
                <div className="f__socials">
                    <ul>
                        {socials.map((social) => (
                            <li key={social.id}>
                                <a href={social.url} target={social.target} rel={social.rel}>{<social.icon />}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__mr">
                    <p>Portfolio design & development - Danny Bae</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
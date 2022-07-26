import { socials } from "../../constants/socials"; 
import "./Footer.scss"; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-headline">
                    <h1>Social Links<span>.</span></h1>
                </div>
                <div className="footer-social">
                    <ul>
                        {socials.map((social) => (
                            <li key={social.id}>
                                <a href={social.url} target={social.target} rel={social.rel}>{<social.icon />}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer-mr">
                    <p>Portfolio design & development - Danny Bae</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
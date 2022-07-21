import { socials } from "../../constants/socials"; 
import "./Contact.scss"; 

const Contact = () => {  
    return (
        <div id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-headline">
                        <h1>Send Me A Note<span>.</span></h1>
                    </div>
                    <div className="contact-introduction">
                        <p>I'm open to discussing new opportunities to work together. Feel free to send a note and I'll do my best to get back to you!</p>
                    </div>
                    <a href="mailto:danibae91@gmail.com?subject=👨‍💻  Hi Danny Let's Work Together!" target="_blank" rel="noreferrer noopener" className="cta">Say Hello</a>
                </div>
            </div>
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
        </div>
    )
}

export default Contact
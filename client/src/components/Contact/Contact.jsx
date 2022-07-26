import Footer from "../Footer/Footer";
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
            <Footer />
        </div>
    )
}

export default Contact
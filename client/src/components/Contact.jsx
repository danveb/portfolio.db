import "../styles/Contact.scss"; 

const Contact = () => {  
    return (
        <div id="contact" className="contact">
            <div className="contact__wrapper">
                <div className="contact__main">
                    <div className="contact__title">
                        <h1>Send Me A Note<span>.</span></h1>
                    </div>
                    <div className="contact__intro">
                        <p>I'm open to discussing new opportunities to work together. Feel free to send a note and I'll do my best to get back to you!</p>
                        <a href="mailto:danibae91@gmail.com?subject=👨‍💻  Hi Danny Let's Work Together!" target="_blank" rel="noreferrer noopener" className="cta">Say Hello</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
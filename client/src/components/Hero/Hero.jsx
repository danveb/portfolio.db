import "./Hero.scss"; 
import laptop from "../../constants/koffee.png"; 

const Hero = () => {
    return (
        <div id="intro" className="hero">
            <div className="hero-wrapper">
                <div className="hero-headline">
                    <h1>Hi, I'm Danny<span>.</span>
                    <span>Frontend Developer<span>.</span></span></h1>
                </div>
                <div className="hero-introduction">
                    <p>I'm passionate about finding ways to efficiently solve complex problems and make a positive difference for today and for tomorrow.</p>
                </div>
                <div className="hero-btn">
                    <a href="https://www.linkedin.com/in/daniel-eze-bae" target="_blank" rel="noopener noreferrer" className="btn">Let's Work Together</a>
                </div>
                <div className="hero-laptop">
                    <img src={laptop} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero
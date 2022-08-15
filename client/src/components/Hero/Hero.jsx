// import ioniq5 from "../../assets/projects/ioniq5.png"; 
import laptop from "../../assets/projects/asador.png"; 
import "./Hero.scss"; 

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
                    <a href="https://www.linkedin.com/in/daniel-eze-bae" target="_blank" rel="noopener noreferrer" className="btn">
                        <div className="hover"></div>
                        <span>Let's Work Together</span>
                    </a>
                </div>
                <div className="hero-laptop">
                    <img src={laptop} alt="laptop hero" />
                </div>
                <div className="scroll-arrow">
                <svg width="30px" height="30px">
                    <path
                        stroke="#ffffff"
                        fill="none"
                        strokeWidth="2px"
                        d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "
                    ></path>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Hero
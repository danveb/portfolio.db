import laptop from "../assets/projects/sail-ly.png"; 
import "../styles/Hero.scss"; 

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__wrapper">
                <div className="hero__head">
                    <h1>Hi, I'm Danny<span>.</span>
                    <span>Frontend Developer<span>.</span></span></h1>
                </div>
                <div className="hero__intro">
                    <p>I'm passionate about finding ways to efficiently solve complex problems and make a positive difference for today and for tomorrow.</p>
                </div>
                <div className="hero__btn">
                    <a href="https://www.linkedin.com/in/daniel-eze-bae" target="_blank" rel="noopener noreferrer" className="cta">
                        <div className="hover"></div>
                        <span>Let's Work Together</span>
                    </a>
                </div>
                <div className="hero__laptop">
                    <img src={laptop} alt="laptop hero" />
                </div>
                <div className="hero__arrow">
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

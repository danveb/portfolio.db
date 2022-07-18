import profile from "../../constants/profile.JPG"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="hero-wrapper">
                <img src={profile} alt="avatar" />
                <div className="hero-headline">
                    <p>Hi I'm Danny Bae</p>
                    <h2>Frontend Developer<span>.</span></h2>
                </div>
                <div className="hero-introduction">
                    <p>I'm passionate about finding ways to efficiently solve problems and make a positive difference for today and for tomorrow.</p>
                </div>
                <a href="#about" className="btn">About Me</a>
            </div>
        </div>
    )
}

export default Hero
import profile from "../../constants/profile.jpg"; 
import "./Hero.scss"; 

const Hero = () => {
    return (
        <div id="intro" className="hero">
            <div className="hero-wrapper">
                <img src={profile} alt="avatar" />
                <div className="hero-headline">
                    <h1>Hi, I'm Danny Bae<span>.</span></h1>
                </div>
                <div className="hero-introduction">
                    <p>I'm a <span className="highlight">frontend developer</span>, passionate about finding ways to efficiently solve complex problems and make a positive difference for today and for tomorrow.</p>
                </div>
                <a href="#about" className="btn">About Me</a>
                <a href="https://www.github.com/danveb" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
        </div>
    )
}

export default Hero
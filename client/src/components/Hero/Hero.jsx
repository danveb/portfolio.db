import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';import "./Hero.scss"; 

const Hero = () => {
    return (
        <div id="hero" className="hero">
            <div className="hero-headline">
                <p>Hi There, I'm <span>Danny.</span></p>
                <h2>Frontend Developer<span>.</span></h2>
            </div>
            <div className="hero-introduction">
                <p>I'm passionate about finding ways to efficiently solve problems and make a positive difference for today and for tomorrow.</p>
            </div>
            <a href="#about" className="btn">About Me</a>
            <div className="hero-svg">
                <a href="#about"><ArrowDropDownCircleIcon /></a>
            </div>
        </div>
    )
}

export default Hero
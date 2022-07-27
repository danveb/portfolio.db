import profile from "../../assets/profile/profile.jpg"; 
import { logos } from "../../constants/logos"; 
import "./About.scss"; 

const About = () => {
    return (
    <div id="about" className="about">
        <div className="about-wrapper">
            <div className="about-left">
                <img src={profile} alt="barista" />
            </div>
            <div className="about-right">
                <div className="about-title">
                    <h3>My Story<span>.</span></h3>
                </div>
                <div className="about-description">
                    <p>My journey started in 2020 when I wrote my first line of code, <span>Hello World</span> on an HTML document. This simple, yet powerful line of code was the catalyst to learning web development (courses on HTML, CSS & JavaScript) and thus building my first static website.</p>
                    <p>Fast-forward to today, most of my web development work is with React. I design and develop web apps that provide a rich user interface/experience. I focus on creating clean, functional, scalable, and testable apps.</p>
                    <p>On weekends I spend time tufting cool rugs, crafting home-made boba tea with friends and dreaming about soccer.</p>
                </div>
                <div className="about-skills">
                    <ul>
                        {logos.map((logo) => (
                            <li key={logo.id}>
                                <img src={logo.img} alt={logo.alt} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About
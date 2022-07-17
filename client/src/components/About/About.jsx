import "./About.scss"; 

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-headline">
                <div className="highlight"></div>
                <h2>Frontend developer<span>.</span></h2>
            </div>
            <div className="about-introduction">
                <p>I have two years of hands-on experience creating interactive and user-friendly applications, using the latest technologies.</p>
            </div>
            <a href="https://drive.google.com/file/d/1wucwIMj5H4cytQp3QRCMEblhZZR_8Y3k/view?usp=sharing" target="_blank" rel="noreferrer" className="btn">See Resume</a>
            <div className="about-life">
                <div className="about-life--left">
                    <p>My journey in web development started back in 2020 when I wrote my first line of code, <span>Hello World</span>. This simple, yet powerful line was the beginning of it all.</p>
                    <p>HTML, CSS and JavaScript gave me the elementary tools to start building creative and intuitive websites.</p>
                    <p>Fast-forward to today, most of my attention in web development goes to React.js. combined with Node.js, Express.js and a mixture of PostgreSQL and MongoDB. Creating clean, functional, scalable, and testable applications are my main focus.</p>    
                </div>
                <div className="about-life--right">
                    <img src="https://avatars.githubusercontent.com/u/63386733?v=4" alt="github-avatar"/>
                </div>
            </div>
        </div>
    )
}

export default About
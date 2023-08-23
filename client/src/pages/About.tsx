import Button from "../components/Button";
import profile from "../assets/profile/profile-bw.png"; 
import { logos } from "../constants/logos"; 
import "../styles/About.css"; 

export default function About() {
  return (
    <div className="about">
      <div className="about__wrapper">
        <section className="about__main">
          <div className="about__title">
            <h1>this is my story<span className="dot--green">.</span> 📓</h1>
          </div>
          <div className="breakline"></div>
          <div className="about__profile">
            <img src={profile} alt="b&w profile avatar" />
          </div>
          <div className="about__intro">
            <p>I started my journey as a developer back in 2020, when I wrote my first line of code, <span>Hello World</span> on an HTML document. Little did I know this simple, yet powerful line of code would motivate me to learn web development due to its limitless posibilities in the technology space. I delved deeper into HTML, CSS and JavaScript, laying the foundation for my journey in web development as a developer. </p>
          </div>
          <div className="about__intro">
            <p>Fast-forward to today, my projects showcase a diverse range of web applications, mostly developed with React. I'm currently learning TypeScript to encourage and enhance type safety of my code as well as to scale existing and new projects. </p>
          </div>
          <div className="about__intro">
            <p>My mission is to design and develop web applications that provide a rich user interface. I focus on creating an aesthetically clean, functional, scalable, and testable apps. </p>
          </div>
        </section>
        <section className="about__skills">
          <ul>
            {logos.map((logo) => (
              <li key={logo.id}>
                <img src={logo.img} alt={logo.alt} />
              </li>
            ))}
          </ul>
        </section>
        <section className="about__bottom">
          <Button title="explore projects" url="/projects" />
        </section>
      </div>
    </div>
  )
}
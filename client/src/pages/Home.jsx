import chevronDown from "../assets/hero/chevron-down.svg"; 
import Button from "../components/Button";
import "../styles/Home.css"; 

export default function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        <section className="home__top">
          <div className="home__title">
            <h1>hey, I'm Danny<span className="dot--green">.</span> 👨‍💻</h1>
          </div>
          <div className="home__intro">
            <p>I'm a frontend developer, passionate about finding ways to efficiently solve complex problems and make a positive difference for today and for tomorrow. I'm currently building my personal portfolio, which contains some of my latest projects. </p>
          </div>
          <div className="home__intro">
            <p>Feel free to continue browsing my portfolio to know a little more about me, and the type of projects I love to create. </p>
          </div>
          <div className="home__intro">
            <p>Over the past couple of years, I've dived into the technologies I'm interested in at the time, and how I learned to grow in the development world. </p>
          </div>
          <div className="home__intro">
            <p><span className="dot--green bold">Happy coding!</span> </p>
          </div>
          {/* <div className="hero__arrow">
            <img src={chevronDown} alt="chevron down arrow" />
          </div> */}
          <Button title={"Explore Projects"} url="/projects" />
        </section>
      </div>
    </div>
  )
}
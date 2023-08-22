import { ProjectList } from "../components"; 
import "../styles/Projects.css"; 

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__wrapper">
        <section className="projects__main">
          <div className="projects__title" data-testid="title">
            <h1>my projects<span className="dot--green">.</span> 🚀</h1>
          </div>
          <div className="breakline"></div>
          <div className="projects__intro">
            <p>Here are some of my most loved projects: </p>
          </div>
        </section>
        <section className="projects__gallery">
          <ProjectList />
        </section>
      </div>
    </div>
  )
}
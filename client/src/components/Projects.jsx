import { projects } from "../constants/projects";
import "../styles/Projects.scss"; 

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div className="projects__wrapper">
                <div className="projects__main">
                    <div className="projects__title">
                        <h3>Projects<span>.</span></h3>
                    </div>
                    <div className="projects__cards">
                        {projects.map((project) => (
                            <div className="card__container" key={project.id}>
                                <div className="image__container">
                                    <img src={project.img} alt="portfolio project showcase" style={{backgroundColor: `${project.backgroundColor}`}}/>
                                </div>
                                <div className="card__content">
                                    <div className="card__title">
                                        <h1>{project.title}</h1>
                                    </div>
                                    <div className="card__body">
                                        <p>{project.description}</p>
                                    </div>
                                    {project.buttons.map((item) => (
                                        <div className="btn" key={item}>
                                            <button>{item}</button>
                                        </div>
                                    ))} 
                                    <div className="card__footer">
                                        <a href={project.liveSite} target={project.target} rel={project.rel}>{project.liveSite !== "" ? "Live Site" : ""}</a>
                                        <a href={project.githubRepo} target={project.target} rel={project.rel}>{project.githubRepo !== "" ? "GitHub Repo" : ""}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
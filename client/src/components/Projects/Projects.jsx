import { projects } from "../../constants/projects";
import "./Projects.scss"; 

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <div className="projects-wrapper">
                {projects.map((project) => (
                    <div className="card-container" key={project.id}>
                        <div className="image-container">
                            <img src={project.img} alt="portfolio project showcase" style={{backgroundColor: `${project.backgroundColor}`}}/>
                        </div>
                        <div className="card-content">
                            <div className="card-title">
                                <h1>{project.title}</h1>
                            </div>
                            <div className="card-body">
                                <p>{project.description}</p>
                            </div>
                            {project.buttons.map((item) => (
                                <div className="btn" key={item}>
                                    <button>{item}</button>
                                </div>
                            ))} 
                            <div className="card-footer">
                                <a href={project.liveSite} target={project.target} rel={project.rel}>{project.liveSite !== "" ? "Live Site" : ""}</a>
                                <a href={project.githubRepo} target={project.target} rel={project.rel}>{project.githubRepo !== "" ? "GitHub Repo" : ""}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
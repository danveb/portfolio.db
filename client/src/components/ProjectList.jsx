import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import "../styles/ProjectList.css"; 

export default function ProjectList() {
  return (
    <div className="projectList">
      <div className="projectList__wrapper">
        {projects.map((project) => (
          <div key={project.id}>
            <ProjectCard 
              img={project.img} 
              alt={project.alt}
              title={project.title}
              description={project.description}
            />
            <div className="projectList__navigation">
              <Button title={project.btnTitle} url={project.btnUrl} />
            </div>
          </div>
        ))}
        <div className="projectList__btn">
          <Button title="are you looking for more projects?" url="https://github.com/danveb" target="_blank" rel="noreferrer noopener" />
        </div>
      </div>
    </div>
  )
}
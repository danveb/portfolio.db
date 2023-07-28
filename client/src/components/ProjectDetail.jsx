import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { projects } from "../constants/projects";
import "../styles/ProjectDetail.css"; 

export default function ProjectDetail() {
  // useLocation
  // grab location from current param for name of "project" 
  const location = useLocation(); 
  const path = location.pathname.split("/")[2]; 

  // useState 
  const [project, setProject] = useState([]); 

  // useEffect
  useEffect(() => {
    try {
      // filter the project solely based on title of the project, which eventually matches to current path
      let filteredProject = projects.filter((project) => project.title === path); 
      // save filtered project to project "state"
      setProject(filteredProject); 
    } catch (error) {
      console.log(error); 
    }
  }, [path]); 

  return (
    <div className="projectDetail" data-testid="projectDetail">
      <div className="projectDetail__wrapper">
        <div className="projectDetail__main">
          {project.map((p) => (
            <div key={p.id}>
              <section className="projectDetail__top">
                <h1>{p.title}<span className="dot--green">.</span></h1>
                <div className="breakline"></div>
                <p>{p.description}</p>
                <Button title={p.liveUrlTitle} url={p.liveUrl} target="_blank" rel="noreferrer noopener"/>
                <Button title={p.gitHubTitle} url={p.gitHubUrl} target="_blank" rel="noreferrer noopener"/>
              </section>
              <section className="projectDetail__bottom">
                <img src={p.img} alt={p.alt} />
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
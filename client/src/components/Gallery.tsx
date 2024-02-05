import { projects } from "../constants/projects";
import "../styles/Gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__card">
          {projects.map((project) => (
            <img src={project.img} alt={project.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}
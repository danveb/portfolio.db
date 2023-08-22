import "../styles/ProjectCard.css"; 

import { ProjectCardProps } from "../types";

export default function ProjectCard({ img, alt, title, description }: ProjectCardProps) {
  return (
    <div className="projectCard__card" data-testid="projectCard">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
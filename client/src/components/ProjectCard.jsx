import "../styles/ProjectCard.css"; 

export default function ProjectCard({ img, alt, title, description }) {
  return (
    <div className="projectCard__card" data-testid="projectCard">
      <img src={img} alt={alt} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
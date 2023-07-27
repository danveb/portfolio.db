import "../styles/ProjectCard.css"; 

export default function ProjectCard({ img, alt, title, description }) {
  return (
    <>
      <div className="projectCard__card">
        <img src={img} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  )
}
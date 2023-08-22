import asador from "../assets/gallery/asador_blank.png"; 
import bobaLife from "../assets/gallery/bobaLife_blank.png"; 
import sailly from "../assets/gallery/sailly_blank.png"; 
import ioniq5 from "../assets/gallery/ioniq5_blank.png"; 
import coini$t from "../assets/gallery/coini$t_blank.png"; 
import "../styles/Gallery.css"; 

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__card">
          <img src={sailly} alt="" />
          <img src={asador} alt="" />
          <img src={bobaLife} alt="" />
          <img src={ioniq5} alt="" />
          <img src={coini$t} alt="" />
        </div>
      </div>
    </div>
  )
}
import { Link } from "react-router-dom";
import rightArrow from "../assets/button/right-arrow.png"; 
import rightArrowAlt from "../assets/button/right-arrow-alt.png"; 
import "../styles/Button.css";
import { ButtonProps } from "../types";

export default function Button({ title, url, rel, target }: ButtonProps) {
  return (
    <div className="button__container" data-testid="button">
      <Link to={url} className={url.indexOf("https://github.com") !== -1 ? "button--cta--alt" : "button--cta"} rel={rel} target={target}>
        {title}
        <img src={url.indexOf("https://github.com") !== -1 ? rightArrowAlt : rightArrow} alt="right arrow"/>
      </Link>
    </div>
  ) 
}
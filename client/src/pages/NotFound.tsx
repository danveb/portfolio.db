import { Button } from "../components";
import "../styles/NotFound.css"; 

export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound__wrapper">
        <section className="notFound__main">
          <div className="notFound__title">
            <h1>Not Found<span className="dot--green">...</span> 🚒</h1>
          </div>
          <div className="breakline"></div>
          <div className="notFound__intro">
            <p>404 | Looks like you encountered an error</p>
          </div>
        </section>
        <section className="notFound__bottom">
          <Button title="back to safety" url="/" />
        </section>
      </div>
    </div>
  )
}
import { MapboxGL, Note } from "../components";
import "../styles/Contact.css"; 

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <section className="contact__main">
          <div className="contact__title">
            <h1>send me a note<span className="dot--green">.</span> 📝</h1>
          </div>
          <div className="breakline"></div>
          <div className="contact__intro">
            <p>I'm in the Chicago area, but open to discussing new opportunities to work together regardless of location. Feel free to send a note and I'll do my best to get back to you. </p>

          </div>
        </section>
        <MapboxGL />
        <Note />
      </div>
    </div>
  )
}
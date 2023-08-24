import { Button } from "./index"; 
import "../styles/MessageSent.css"; 

export default function MessageSent() {
  return (
    <div className="messageSent">
      <div className="messageSent__wrapper">
        <section className="messageSent__main">
          <div className="messageSent__title">
            <h1>thanks a lot<span className="dot--green">.</span> 🎊</h1>
          </div>
          <div className="breakline"></div>
          <div className="messageSent__intro">
            <p>message sent | thank you for visiting my portfolio. And talk soon! </p>
          </div>
        </section>
        <section className="messageSent__bottom">
          <Button title="chau chau 👋" url="/" />
        </section>
      </div>
    </div>
  )
}
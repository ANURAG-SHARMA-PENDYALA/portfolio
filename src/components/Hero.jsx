import Button from "./Button"


const Hero = () => {
  return (
    <section className="hero-section"> 
      <div className="container hero-wrapper flex">
        <div className="hero-content">
        <h1 className="hero-title">Hi! This is Anurag Sharma Pendyala</h1>
        <p className="hero-description">I am Experienced Web Developer, Data Enthusiast</p>
        <div className="button-wrapper flex">
           <Button name={"View Projects"} className="action-button"/>
        <Button name={"Download Resume"} className="inactive-button"/>
        </div>
       
        </div>
        <div className="hero-image-wrapper">
          <img src="" alt="Here we need include the image" />
        </div>
      </div>

    </section>
  )
}

export default Hero
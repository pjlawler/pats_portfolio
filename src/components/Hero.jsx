import patPhoto from '../assets/pat_headshot.png'

function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__photo" src={patPhoto} alt="Pat Lawler" />
      <div className="hero__intro">
        <h1 className="hero__title">Pat Lawler</h1>
        <p className="hero__roles">Pilot · Developer · Entrepreneur</p>
      </div>
    </section>
  )
}

export default Hero

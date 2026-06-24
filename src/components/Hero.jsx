import patPhoto from '../assets/pat_headshot.png'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__frame">
        <img className="hero__photo" src={patPhoto} alt="Pat Lawler" />
        <span className="hero__tick hero__tick--tl" />
        <span className="hero__tick hero__tick--tr" />
        <span className="hero__tick hero__tick--bl" />
        <span className="hero__tick hero__tick--br" />
      </div>
      <div className="hero__intro">
        <h1 className="hero__title">Pat Lawler</h1>
        <p className="hero__roles">Aviation &amp; Software Professional · Entrepreneur</p>
      </div>
    </section>
  )
}

export default Hero

import patCutout from '../assets/pat_cutout.webp'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__frame">
        <span className="hero__box">
          <span className="hero__tick hero__tick--tl" />
          <span className="hero__tick hero__tick--tr" />
          <span className="hero__tick hero__tick--bl" />
          <span className="hero__tick hero__tick--br" />
        </span>
        <img className="hero__photo" src={patCutout} alt="Pat Lawler" />
      </div>
      <div className="hero__intro">
        <h1 className="hero__title">Pat Lawler</h1>
        <p className="hero__tagline">
          Pilot, developer, and founder — I solve hard problems in the cockpit
          and the codebase.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Hero

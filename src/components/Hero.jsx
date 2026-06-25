import patCutout from '../assets/pat_cutout.webp'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
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
            A proven business professional whose experience and skills can't
            fit into a single box — a dual-rated pilot and full-stack software
            engineer who holds a master's in Aeronautical Science (Human
            Factors), backed by the discipline and attention to detail of a
            long military career.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

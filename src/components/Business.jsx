import businessBanner from '../assets/business-banner.webp'
import { summary, ventures } from '../data/business.js'

function Business() {
  return (
    <div className="panel">
      <img className="panel__banner" src={businessBanner} alt="" loading="lazy" />
      <div className="panel__lead">
        {summary.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="ventures">
        {ventures.map((venture) => (
          <article key={venture.title} className="venture">
            <div className="venture__head">
              <h3 className="venture__title">{venture.title}</h3>
              {venture.period && <span className="venture__period">{venture.period}</span>}
            </div>
            <p className="venture__body">{venture.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Business

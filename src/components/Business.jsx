import { useState } from 'react'
import businessBanner from '../assets/business-banner.webp'
import { summary, ventures } from '../data/business.js'

function Business() {
  const [open, setOpen] = useState(() => new Set())

  const toggle = (key) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })

  return (
    <div className="panel">
      <img className="panel__banner" src={businessBanner} alt="" loading="lazy" />
      <div className="panel__lead">
        {summary.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="ventures">
        {ventures.map((venture, i) => {
          const isOpen = open.has(venture.title)
          return (
            <article key={venture.title} className={`venture${isOpen ? ' venture--open' : ''}`}>
              <button
                type="button"
                className="venture__head"
                aria-expanded={isOpen}
                aria-controls={`venture-body-${i}`}
                onClick={() => toggle(venture.title)}
              >
                <h3 className="venture__title">{venture.title}</h3>
                <span className="venture__meta">
                  {venture.period && <span className="venture__period">{venture.period}</span>}
                  <span className="venture__chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </span>
              </button>
              {isOpen && (
                <p id={`venture-body-${i}`} className="venture__body">
                  {venture.body}
                </p>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Business

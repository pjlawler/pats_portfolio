import { useState } from 'react'
import { education } from '../data/education.js'

function Education() {
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
      <div className="education">
        {education.map((item) => {
          const key = `${item.degree}-${item.school}`
          const isOpen = open.has(key)
          return (
            <article key={key} className={`edu${isOpen ? ' edu--open' : ''}`}>
              <button
                type="button"
                className="edu__head"
                aria-expanded={isOpen}
                aria-controls={`edu-points-${key}`}
                onClick={() => toggle(key)}
              >
                <span className="edu__degree">{item.degree}</span>
                <span className="edu__meta">
                  <span className="edu__school">{item.school}</span>
                  <span className="edu__chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </span>
              </button>
              {isOpen && (
                <ul id={`edu-points-${key}`} className="edu__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Education

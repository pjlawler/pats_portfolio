import { useState } from 'react'
import developerBanner from '../assets/developer-banner.webp'
import cirrusApproachImg from '../assets/cirrus-approach-icon.jpg'
import letsGoFlyImg from '../assets/lets-go-fly-icon.jpg'
import drugTestImg from '../assets/911-logo.svg'
import learnThaiImg from '../assets/learn-thai-icon.jpg'
import functionCalcImg from '../assets/functioncalc-icon.jpg'
import calorieCalcImg from '../assets/caloriecalc-icon.jpg'
import { experience, skills, summary } from '../data/developer.js'

const projectImages = {
  'cirrus-approach': cirrusApproachImg,
  'lets-go-fly': letsGoFlyImg,
  '911': drugTestImg,
  'learn-thai': learnThaiImg,
  functioncalc: functionCalcImg,
  caloriecalc: calorieCalcImg,
}

function Developer() {
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
      <img className="panel__banner" src={developerBanner} alt="" loading="lazy" />
      <div className="panel__lead">
        {summary.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <section className="dev-section">
        <h3 className="dev-section__title">Experience</h3>
        <div className="roles">
          {experience.map((job) => {
            const key = `${job.role}-${job.org}`
            const isOpen = open.has(key)
            return (
              <article key={key} className={`role role--card${isOpen ? ' role--open' : ''}`}>
                <button
                  type="button"
                  className="role__toggle"
                  aria-expanded={isOpen}
                  aria-controls={`role-detail-${key}`}
                  onClick={() => toggle(key)}
                >
                  <span className="role__heading">
                    <h4 className="role__title">{job.role}</h4>
                    <span className="role__meta">
                      {job.org} · {job.period}
                    </span>
                  </span>
                  <span className="role__chevron" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div id={`role-detail-${key}`} className="role__detail">
                    {job.sections.map((sec) => (
                      <div key={sec.heading} className="lead-block">
                        <h5 className="lead-block__heading">{sec.heading}</h5>
                        {sec.body.map((para, j) => (
                          <p key={j}>{para}</p>
                        ))}
                        {sec.projects?.length > 0 && (
                          <div className="work-stack">
                            {sec.projects.map((proj) => (
                              <div key={proj.title} className="work-card">
                                <div className="work-card__head">
                                  <img
                                    className={`work-card__icon${proj.logo ? ' work-card__icon--logo' : ''}`}
                                    src={projectImages[proj.img]}
                                    alt=""
                                    loading="lazy"
                                  />
                                  <span className="work-card__text">
                                    <span className="work-card__title">{proj.title}</span>
                                    <span className="work-card__type">{proj.type}</span>
                                  </span>
                                </div>
                                <div className="work-card__detail">
                                  <p>{proj.body}</p>
                                  {proj.tech?.length > 0 && (
                                    <ul className="work-card__tech">
                                      {proj.tech.map((t) => (
                                        <li key={t}>{t}</li>
                                      ))}
                                    </ul>
                                  )}
                                  {proj.link && (
                                    <a
                                      className="work-card__link"
                                      href={proj.link}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {proj.link.includes('apps.apple.com')
                                        ? 'View on the App Store ↗'
                                        : 'Visit the site ↗'}
                                    </a>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="dev-section">
        <h3 className="dev-section__title">Technical Skills</h3>
        <div className="skills">
          {skills.map((cat) => (
            <div key={cat.group} className="skills__row">
              <span className="skills__label">{cat.group}</span>
              <ul className="skills__chips">
                {cat.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Developer

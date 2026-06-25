import developerBanner from '../assets/developer-banner.webp'
import { experience, projects, skills, summary } from '../data/developer.js'

function Developer() {
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
          {experience.map((job) => (
            <article key={`${job.role}-${job.org}`} className="role">
              <div className="role__head">
                <h4 className="role__title">{job.role}</h4>
                <span className="role__meta">
                  {job.org} · {job.period}
                </span>
              </div>
              <ul className="role__points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
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

      <section className="dev-section">
        <h3 className="dev-section__title">Featured Projects</h3>
        <div className="projects">
          {projects.map((project) => (
            <article key={project.title} className="card">
              <h4 className="card__title">{project.title}</h4>
              <p className="card__desc">{project.description}</p>
              <ul className="card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {project.link && (
                <a className="card__link" href={project.link} target="_blank" rel="noreferrer">
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Developer

import { projects } from '../data/projects.js'

function Projects() {
  return (
    <div className="panel">
      <div className="projects">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3 className="card__title">{project.title}</h3>
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
    </div>
  )
}

export default Projects

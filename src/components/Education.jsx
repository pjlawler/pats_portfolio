import { education } from '../data/education.js'

function Education() {
  return (
    <div className="panel">
      <div className="education">
        {education.map((item) => (
          <article key={`${item.degree}-${item.school}`} className="edu">
            <h3 className="edu__degree">{item.degree}</h3>
            <p className="edu__school">{item.school}</p>
            <p className="edu__detail">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Education

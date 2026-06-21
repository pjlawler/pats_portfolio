import { education } from '../data/education.js'

function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section__title">Education</h2>
      <div className="education">
        {education.map((item) => (
          <article key={item.school} className="edu">
            <h3 className="edu__degree">{item.degree}</h3>
            <p className="edu__school">{item.school}</p>
            <p className="edu__detail">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education

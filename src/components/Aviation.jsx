import { certificates, ratings, stats } from '../data/aviation.js'

function Aviation() {
  return (
    <div className="panel">
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <span className="stat__value">{stat.value}</span>
            <span className="stat__label">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="quals">
        <div className="quals__group">
          <h3 className="quals__heading">Certificates</h3>
          <ul className="quals__list">
            {certificates.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="quals__group">
          <h3 className="quals__heading">Ratings</h3>
          <ul className="quals__list">
            {ratings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aviation

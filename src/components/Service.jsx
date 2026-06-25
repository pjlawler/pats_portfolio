import serviceBadge from '../assets/service_badge.png'
import { synopsis } from '../data/service.js'
import RibbonRack from './RibbonRack.jsx'

function Service() {
  return (
    <div className="panel">
      <div className="service__body">
        {synopsis.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <RibbonRack />

      <img
        className="service__crest"
        src={serviceBadge}
        alt="Servitio Dedicati service crest, 1985–2013"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default Service

import serviceBanner from '../assets/service-banner.webp'
import { synopsis } from '../data/service.js'
import RibbonRack from './RibbonRack.jsx'

function Service() {
  return (
    <div className="panel">
      <img className="panel__banner" src={serviceBanner} alt="" loading="lazy" />
      <div className="service__body">
        {synopsis.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <RibbonRack />
    </div>
  )
}

export default Service

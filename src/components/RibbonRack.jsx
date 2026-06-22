import { ribbons } from '../data/ribbons.js'
import eawsWings from '../assets/ribbons/eaws-wings.png'
import recruiterBadge from '../assets/ribbons/recruiter-badge.png'
import maintenanceBadge from '../assets/ribbons/maintenance-badge.png'
import navyRank from '../assets/ribbons/navy-po2.png'
import armyRank from '../assets/ribbons/army-ssg.png'
import afRank from '../assets/ribbons/af-msgt.png'

// Eagerly import every ribbon image, keyed by filename slug.
const images = import.meta.glob('../assets/ribbons/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

function imgFor(slug) {
  const match = Object.entries(images).find(([path]) =>
    path.endsWith(`/${slug}.png`),
  )
  return match ? match[1] : null
}

const PER_ROW = 3

function Ribbon({ ribbon }) {
  return (
    <div className="rack__ribbon" title={ribbon.name}>
      <img src={imgFor(ribbon.slug)} alt={ribbon.name} />
    </div>
  )
}

function RibbonRack() {
  // A partial (incomplete) row sits on TOP and is centered; the rows below are
  // full. Precedence order is preserved — highest-precedence ribbon stays first.
  const remainder = ribbons.length % PER_ROW
  const topRow = remainder ? ribbons.slice(0, remainder) : []
  const rest = ribbons.slice(topRow.length)

  return (
    <div className="rack">
      <div className="rack__layout">
        <div className="rack__ranks">
          <img
            className="rack__rank"
            src={navyRank}
            alt="Navy Aviation Electronics Technician 2nd Class (AT2)"
            title="Navy Aviation Electronics Technician 2nd Class (AT2)"
          />
          <img
            className="rack__rank"
            src={armyRank}
            alt="Army Staff Sergeant"
            title="Army Staff Sergeant"
          />
          <img
            className="rack__rank"
            src={afRank}
            alt="Air Force Master Sergeant"
            title="Air Force Master Sergeant"
          />
        </div>
        <div className="rack__backing">
          {topRow.length > 0 && (
            <div className="rack__toprow">
              {topRow.map((ribbon) => (
                <Ribbon key={ribbon.slug} ribbon={ribbon} />
              ))}
            </div>
          )}
          <div className="rack__grid">
            {rest.map((ribbon) => (
              <Ribbon key={ribbon.slug} ribbon={ribbon} />
            ))}
          </div>
        </div>
        <div className="rack__insignia">
          <img
            className="rack__badge rack__badge--wings"
            src={eawsWings}
            alt="Navy Enlisted Aviation Warfare Specialist insignia"
            title="Navy Enlisted Aviation Warfare Specialist insignia"
          />
          <img
            className="rack__badge rack__badge--recruiter"
            src={recruiterBadge}
            alt="Army National Guard Master Recruiter Badge"
            title="Army National Guard Master Recruiter Badge"
          />
          <img
            className="rack__badge rack__badge--maint"
            src={maintenanceBadge}
            alt="Air Force Master Maintenance Badge"
            title="Air Force Master Maintenance Badge"
          />
        </div>
      </div>
    </div>
  )
}

export default RibbonRack

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

// The whole rack is composed into a single SVG measured in "ribbon-width units"
// (RW). The <svg> is rendered at width:100%, so the browser scales the entire
// assembly to the text-column width as one image, preserving aspect ratio.
const RW = 100 // one ribbon bar wide
const RIBBON_RATIO = 0.276 // ribbon bar height / width (standard 1-3/8" bar)
const RIBBON_H = RW * RIBBON_RATIO
const RANK_H = 0.95 * RW // ranks are sized by height
const GAP = 3 // gap between adjacent ribbons
const STACK_GAP = 22 // vertical gap inside the rank / badge stacks
const COL_GAP = 22 // gap between the rank, ribbon and badge columns
const SLOT = 2 * RW // rank & badge columns each occupy a 2-ribbon-wide slot
const PER_ROW = 3

// Ranks: width derived from each image's intrinsic aspect ratio at a fixed height.
const rankItems = [
  { src: navyRank, ratio: 235 / 298, label: 'Navy Aviation Electronics Technician 2nd Class (AT2)' },
  { src: armyRank, ratio: 250 / 393, label: 'Army Staff Sergeant' },
  { src: afRank, ratio: 250 / 341, label: 'Air Force Master Sergeant' },
].map((r) => ({ ...r, w: RANK_H * r.ratio, h: RANK_H }))

// Badges: width set by a per-badge multiple of a ribbon, height from aspect ratio.
const badgeItems = [
  { src: eawsWings, widthRw: 2.0, ratio: 101 / 368, label: 'Navy Enlisted Aviation Warfare Specialist insignia' },
  { src: recruiterBadge, widthRw: 1.5, ratio: 510 / 530, label: 'Army National Guard Master Recruiter Badge' },
  { src: maintenanceBadge, widthRw: 1.18, ratio: 227 / 340, label: 'Air Force Master Maintenance Badge' },
].map((b) => ({ ...b, w: b.widthRw * RW, h: b.widthRw * RW * b.ratio }))

// Stack items vertically, centered within a fixed-width slot.
function layoutStack(items, gap, slotWidth) {
  const height = items.reduce((s, it) => s + it.h, 0) + gap * (items.length - 1)
  let y = 0
  const placed = items.map((it) => {
    const p = { ...it, x: (slotWidth - it.w) / 2, y }
    y += it.h + gap
    return p
  })
  return { width: slotWidth, height, placed }
}

// Lay out the ribbon grid: a partial (incomplete) row sits centered on top,
// full rows of PER_ROW below it. Precedence order is preserved.
function layoutRibbons(list, perRow) {
  const remainder = list.length % perRow
  const topRow = remainder ? list.slice(0, remainder) : []
  const rest = list.slice(topRow.length)
  const rowWidth = perRow * RW + (perRow - 1) * GAP
  const placed = []
  let y = 0

  if (topRow.length) {
    const w = topRow.length * RW + (topRow.length - 1) * GAP
    const startX = (rowWidth - w) / 2
    topRow.forEach((rb, i) =>
      placed.push({ ...rb, x: startX + i * (RW + GAP), y }),
    )
    y += RIBBON_H + GAP
  }

  rest.forEach((rb, i) => {
    const col = i % perRow
    const row = Math.floor(i / perRow)
    placed.push({ ...rb, x: col * (RW + GAP), y: y + row * (RIBBON_H + GAP) })
  })

  const rows = Math.ceil(rest.length / perRow)
  const height =
    (topRow.length ? RIBBON_H + GAP : 0) + rows * RIBBON_H + (rows - 1) * GAP
  return { width: rowWidth, height, placed }
}

function RibbonRack() {
  const ranks = layoutStack(rankItems, STACK_GAP, SLOT)
  const badges = layoutStack(badgeItems, STACK_GAP, SLOT)
  const grid = layoutRibbons(ribbons, PER_ROW)

  const H = Math.max(ranks.height, grid.height, badges.height)
  const ranksX = 0
  const gridX = ranks.width + COL_GAP
  const badgesX = gridX + grid.width + COL_GAP
  const W = badgesX + badges.width

  // Each column is vertically centered against the tallest column.
  const ranksY = (H - ranks.height) / 2
  const gridY = (H - grid.height) / 2
  const badgesY = (H - badges.height) / 2

  return (
    <div className="rack">
      <svg
        className="rack__svg"
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        role="img"
        aria-label="Military ribbon rack with rank insignia and qualification badges"
      >
        {ranks.placed.map((p, i) => (
          <image
            key={`rank-${i}`}
            href={p.src}
            x={ranksX + p.x}
            y={ranksY + p.y}
            width={p.w}
            height={p.h}
          >
            <title>{p.label}</title>
          </image>
        ))}

        {grid.placed.map((rb) => (
          <image
            key={rb.slug}
            href={imgFor(rb.slug)}
            x={gridX + rb.x}
            y={gridY + rb.y}
            width={RW}
            height={RIBBON_H}
            preserveAspectRatio="none"
          >
            <title>{rb.name}</title>
          </image>
        ))}

        {badges.placed.map((p, i) => (
          <image
            key={`badge-${i}`}
            href={p.src}
            x={badgesX + p.x}
            y={badgesY + p.y}
            width={p.w}
            height={p.h}
          >
            <title>{p.label}</title>
          </image>
        ))}
      </svg>
    </div>
  )
}

export default RibbonRack

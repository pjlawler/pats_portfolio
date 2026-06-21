// Ribbon rack in best-effort order of precedence (highest first).
// NOTE: joint Navy/Air Force/Army precedence is complex — verify against your
// DD-214 / records. Some specialized devices (Armed Forces Reserve Medal
// hourglass + "M" devices, Coast Guard "O" device, AF Expeditionary gold
// border) and the three Minnesota state ribbons are noted but not rendered.
export const ribbons = [
  { slug: 'af-commendation', name: 'Air Force Commendation Medal' },
  { slug: 'af-achievement', name: 'Air Force Achievement Medal' },
  { slug: 'army-achievement', name: 'Army Achievement Medal' },
  { slug: 'meritorious-unit', name: 'Meritorious Unit Commendation' },
  { slug: 'af-outstanding-unit', name: 'Air Force Outstanding Unit Award (3 devices)' },
  { slug: 'navy-meritorious-unit', name: 'Navy Meritorious Unit Commendation' },
  { slug: 'cg-meritorious-unit', name: 'Coast Guard Meritorious Unit Commendation ("O" device)' },
  { slug: 'navy-e', name: 'Navy "E" Ribbon (Battle Effectiveness)' },
  { slug: 'navy-good-conduct', name: 'Navy Good Conduct Medal' },
  { slug: 'af-reserve-meritorious', name: 'Air Reserve Forces Meritorious Service Medal' },
  { slug: 'naval-reserve-meritorious', name: 'Naval Reserve Meritorious Service Medal' },
  { slug: 'national-defense', name: 'National Defense Service Medal' },
  { slug: 'southwest-asia', name: 'Southwest Asia Service Medal' },
  { slug: 'afghanistan-campaign', name: 'Afghanistan Campaign Medal' },
  { slug: 'iraq-campaign', name: 'Iraq Campaign Medal' },
  { slug: 'gwot-service', name: 'Global War on Terrorism Service Medal' },
  { slug: 'mil-volunteer', name: 'Military Outstanding Volunteer Service Medal' },
  { slug: 'navy-overseas', name: 'Navy & Marine Corps Overseas Service Ribbon' },
  { slug: 'af-expeditionary', name: 'Air Force Expeditionary Service Ribbon (Gold Border)' },
  { slug: 'navy-sea-service', name: 'Navy Sea Service Deployment Ribbon' },
  { slug: 'cg-special-ops', name: 'Coast Guard Special Operations Service Ribbon' },
  { slug: 'af-longevity', name: 'Air Force Longevity Service Award (2 devices)' },
  { slug: 'afrm', name: 'Armed Forces Reserve Medal (hourglass + 3 "M" devices)' },
  { slug: 'af-training', name: 'Air Force Training Ribbon' },
  { slug: 'army-service', name: 'Army Service Ribbon' },
]

// State awards (not rendered — not available as standard ribbon images):
export const stateAwards = [
  'Minnesota State Good Conduct Ribbon (3 devices)',
  'Minnesota Distinguished Recruiting Ribbon (5 devices)',
  'Minnesota State Service Medal (1 device)',
]

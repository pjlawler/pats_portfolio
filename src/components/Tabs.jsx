import { useEffect, useRef, useState } from 'react'
import About from './About.jsx'
import Service from './Service.jsx'
import Aviation from './Aviation.jsx'
import Developer from './Developer.jsx'
import Business from './Business.jsx'
import Education from './Education.jsx'
import Contact from './Contact.jsx'

// Inline line icons (stroke = currentColor) shown in each tab's panel header.
// Each is chosen to tell that tab's story, not just label it.
const ICONS = {
  // About — a compass for a career navigated across many headings.
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </>
  ),
  // Aviation — a plane on takeoff, climbing out.
  takeoff: (
    <>
      <path d="M2 22h20" />
      <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
    </>
  ),
  // Developer — a terminal prompt.
  terminal: (
    <>
      <path d="m7 11 2-2-2-2" />
      <path d="M11 13h4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
    </>
  ),
  // Business — a rocket, for launching the venture.
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  // Military — a shield, for service and the air-defense mission.
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  ),
  // Education — an open book.
  book: (
    <>
      <path d="M12 7v14" />
      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </>
  ),
  // Contact — an envelope.
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
}

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  )
}

const TABS = [
  { id: 'about', label: 'About', icon: 'compass', Panel: About },
  { id: 'aviation', label: 'Aviation', icon: 'takeoff', Panel: Aviation },
  { id: 'developer', label: 'Developer', icon: 'terminal', Panel: Developer },
  { id: 'business', label: 'Business', icon: 'rocket', Panel: Business },
  { id: 'military', label: 'Military', icon: 'shield', Panel: Service },
  { id: 'education', label: 'Education', icon: 'book', Panel: Education },
  { id: 'contact', label: 'Contact', icon: 'mail', Panel: Contact },
]

const isTab = (id) => TABS.some((t) => t.id === id)

function Tabs() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
    return isTab(hash) ? hash : 'about'
  })

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (isTab(hash)) {
        setActive(hash)
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const selectTab = (id) => {
    setActive(id)
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <section id="experience" ref={sectionRef} className="section tabs-layout">
      <div className="tabs tabs--vertical" role="tablist" aria-orientation="vertical">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            className={`tab${active === tab.id ? ' tab--active' : ''}`}
            onClick={() => selectTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* All panels are rendered to the DOM (toggled with `hidden`) so the full
          content is crawlable and shareable, not just the active tab. */}
      <div className="tabs__panels">
        {TABS.map((tab) => {
          const Panel = tab.Panel
          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              className="tabs__panel"
              hidden={active !== tab.id}
            >
              <h2 className="tabs__title">
                <span className="tabs__title-icon">
                  <Icon name={tab.icon} />
                </span>
                {tab.label}
              </h2>
              <Panel />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tabs

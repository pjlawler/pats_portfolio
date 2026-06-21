import { useState } from 'react'
import Service from './Service.jsx'
import Aviation from './Aviation.jsx'
import Projects from './Projects.jsx'
import Business from './Business.jsx'

const TABS = [
  { id: 'military', label: 'Military', Panel: Service },
  { id: 'aviation', label: 'Aviation', Panel: Aviation },
  { id: 'developer', label: 'Developer', Panel: Projects },
  { id: 'business', label: 'Business', Panel: Business },
]

function Tabs() {
  const [active, setActive] = useState('military')
  const ActivePanel = TABS.find((t) => t.id === active).Panel

  return (
    <section id="experience" className="section">
      <div className="tabs" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`tab${active === tab.id ? ' tab--active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__panel" role="tabpanel">
        <ActivePanel />
      </div>
    </section>
  )
}

export default Tabs

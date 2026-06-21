const pillars = [
  {
    icon: '✈️',
    title: 'Pilot',
    text: 'Years in the air with hard-earned ratings and a discipline for checklists, decision-making, and operating under pressure.',
  },
  {
    icon: '💻',
    title: 'Developer',
    text: 'Full-stack web and iOS apps — shipping real products from idea to deployment on modern, edge-first stacks.',
  },
  {
    icon: '🚀',
    title: 'Entrepreneur',
    text: 'Founder mindset — spotting opportunities, building businesses, and turning ventures into shipped, profitable products.',
  },
]

function Pillars() {
  return (
    <section id="what" className="section">
      <h2 className="section__title">What I Do</h2>
      <div className="pillars">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="pillar">
            <span className="pillar__icon" aria-hidden="true">{pillar.icon}</span>
            <h3 className="pillar__title">{pillar.title}</h3>
            <p className="pillar__text">{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pillars

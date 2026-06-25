// Cross-domain proof points — the numbers that make the multi-career claim land.
const metrics = [
  { value: '4,500+', label: 'Flight Hours' },
  { value: '12+', label: 'Apps Shipped' },
]

function Credibility() {
  return (
    <section className="cred" aria-label="By the numbers">
      {metrics.map((m) => (
        <div key={m.label} className="cred__item">
          <span className="cred__value">{m.value}</span>
          <span className="cred__label">{m.label}</span>
        </div>
      ))}
    </section>
  )
}

export default Credibility

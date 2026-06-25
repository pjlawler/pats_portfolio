// Inline line icons (stroke = currentColor).
const ICONS = {
  mail: (
    <>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
}

const methods = [
  { icon: 'mail', label: 'pat@lawlerinnovationsinc.com', href: 'mailto:pat@lawlerinnovationsinc.com' },
  { icon: 'phone', label: '(218) 213-3456', href: 'tel:+12182133456' },
  {
    icon: 'linkedin',
    label: 'linkedin.com/in/patricklawler2',
    href: 'https://www.linkedin.com/in/patricklawler2',
    external: true,
  },
]

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

function Contact() {
  return (
    <div className="panel">
      <p className="panel__lead">
        Have a project in mind, need a contract pilot or instructor, or want
        consulting that spans aviation and software? Reach out — Pat is always
        glad to connect.
      </p>
      <ul className="contact-list">
        {methods.map((m) => (
          <li key={m.href}>
            <a
              className="contact-link"
              href={m.href}
              {...(m.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              <span className="contact-link__icon">
                <Icon name={m.icon} />
              </span>
              {m.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contact

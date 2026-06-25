import { useState } from 'react'

// Inline line icons (stroke = currentColor).
const ICONS = {
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </>
  ),
}

const methods = [
  {
    icon: 'linkedin',
    label: 'linkedin.com/in/patricklawler2',
    href: 'https://www.linkedin.com/in/patricklawler2',
    external: true,
  },
  {
    icon: 'globe',
    label: 'lawlerinnovationsinc.com',
    href: 'https://lawlerinnovationsinc.com',
    external: true,
  },
]

// Web3Forms access key — public by design (it only allows sending to the
// verified inbox). Set VITE_WEB3FORMS_KEY in .env.local; see README/setup notes.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

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
  // idle | submitting | success | error
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', ACCESS_KEY)
    data.append('subject', 'New message from patlawler.com')
    data.append('from_name', 'patlawler.com')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(json.message || 'Something went wrong. Please email directly.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please email directly.')
    }
  }

  return (
    <div className="panel">
      <p className="panel__lead">
        Have a project in mind, need a contract pilot or instructor, or want
        consulting that spans aviation and software? Reach out — Pat is always
        glad to connect.
      </p>

      {status === 'success' ? (
        <div className="form-success" role="status">
          <strong>Thanks — your message is on its way.</strong>
          <p>Pat will get back to you shortly. For anything urgent, the direct lines are below.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={onSubmit} noValidate>
          {/* Honeypot — bots fill this; humans never see it. */}
          <input
            type="checkbox"
            name="botcheck"
            className="contact-form__hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="contact-form__row">
            <label className="contact-form__field">
              <span className="contact-form__label">Name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>
            <label className="contact-form__field">
              <span className="contact-form__label">Email</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>
          </div>

          <label className="contact-form__field">
            <span className="contact-form__label">Message</span>
            <textarea name="message" rows={5} required />
          </label>

          <div className="contact-form__actions">
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'error' && (
              <span className="contact-form__error" role="alert">
                {error}
              </span>
            )}
          </div>
        </form>
      )}

      <div className="contact-direct">
        <span className="contact-direct__heading">Or reach out directly</span>
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
    </div>
  )
}

export default Contact

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="navbar__brand">Pat Lawler</a>
      <nav className="navbar__nav">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar

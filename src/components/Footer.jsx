function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a href="https://github.com/pjlawler" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} Pat Lawler
      </p>
    </footer>
  )
}

export default Footer

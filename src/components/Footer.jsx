function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Shantanu Roy</p>

      <p>Designed & developed with intention.</p>

      <div className="footer-links">
        <a
          href="https://github.com/shantanu992003"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
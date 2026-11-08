
import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <p className="contact-eyebrow">LET'S CONNECT</p>

        <h1>
          Have a role
          <br />
          <span>I'd be a good fit for?</span>
        </h1>

        <p className="contact-intro">
          I'm always interested in meeting new people, exploring
          opportunities and discussing ideas. Whether you have a
          role in mind or simply want to connect, I'd love to hear
          from you.
        </p>
      </header>

      <section className="contact-details">
        <a
          href="mailto:shantanu09092003@gmail.com"
          className="contact-item"
        >
          <div>
            <span className="contact-label">EMAIL</span>
            <h2>shantanu09092003@gmail.com</h2>
          </div>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/shantanuxroy/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <div>
            <span className="contact-label">LINKEDIN</span>
            <h2>Connect with me</h2>
          </div>
          <span className="contact-arrow">↗</span>
        </a>

        <a
          href="tel:+61401078100"
          className="contact-item"
        >
          <div>
            <span className="contact-label">PHONE</span>
            <h2>+61 401 078 100</h2>
          </div>
          <span className="contact-arrow">↗</span>
        </a>
      </section>

      <section className="contact-availability">
        <p className="contact-eyebrow">CURRENT AVAILABILITY</p>

        <h2>Open to opportunities.</h2>

        <div className="availability-grid">
          <div className="availability-item">
            <span className="availability-label">WORK RIGHTS</span>
            <p>
              Unlimited work rights in Australia until November 2027.
            </p>
          </div>

          <div className="availability-item">
            <span className="availability-label">EMPLOYMENT TYPES</span>
            <p>
              Open to part-time, full-time, contract and other
              suitable employment arrangements.
            </p>
          </div>

          <div className="availability-item">
            <span className="availability-label">WORKING ARRANGEMENTS</span>
            <p>
              Open to hybrid, on-site and remote opportunities.
            </p>
          </div>
        </div>
      </section>

      <footer className="contact-closing">
        <p>THANK YOU FOR STOPPING BY.</p>
        <h2>Looking forward to hearing from you.</h2>
      </footer>
    </main>
  );
}

export default Contact;

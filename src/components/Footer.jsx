export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-shell glass-card">
          <div className="footer-main">
            <div className="footer-brand">
              <p className="logo">Hox Ai Tutor</p>
              <p className="footer-blurb">Adaptive intelligence for modern classrooms and high-performing schools.</p>
              <span className="footer-tag">Built for Schools &bull; Powered by AI</span>
            </div>
            <div className="footer-col">
              <h4>Platform</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Deployment Models</a>
              <a href="#schools">For Schools</a>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <a href="#demo">Request Demo</a>
              <a href="#contact">Talk to Team</a>
              <a href="#top">Back to Top</a>
            </div>
            <div className="footer-col footer-contact">
              <h4>School Sales Desk</h4>
              <p>Pitching to schools? We help you close faster with ROI-first positioning and pilot rollout support.</p>
              <div className="footer-meta">
                <a href="mailto:contact@hoxinfotech.com">contact@hoxinfotech.com</a>
                <a href="tel:+9995550353">9995550353</a>
              </div>
              <a href="https://wa.me/9995550353?text=Hi%20Hox Ai Tutor%2C%20I%20want%20a%20school%20sales%20demo."
                className="btn btn-coral footer-demo-btn" target="_blank" rel="noopener noreferrer">Book Demo</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">&copy; 2026 Hox Ai Tutor. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">x</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

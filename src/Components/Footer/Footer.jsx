import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Palak Yadav</h3>
          <p>Full Stack Developer | Web Designer</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://github.com/palak320" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:ypalak268@gmail.com">Email</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Palak Yadav. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
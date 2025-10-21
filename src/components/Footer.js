import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Mahmoud Hassan — Built with React</p>
        <div className="social">
          <a href="https://github.com/mahmoudhassan2005" target="_blank" rel="noreferrer">GitHub</a>

          <a href="https://www.linkedin.com/in/mahmoud-hassan-9b0094246" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
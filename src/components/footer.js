import React from "react"
import "../styles/global.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Juan Espinoza. All rights reserved.</p>

        <div className="social-links">
          <a
            href="https://github.com/JESP-501"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="social-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jesp501/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

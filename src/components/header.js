import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

export default function Header({ links }) {
  return (
    <header className="header">
      <nav className="nav">
        {links.map(link => (
          <Link key={link.path} to={link.path} className="nav-link">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

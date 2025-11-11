import * as React from "react"
import Footer from "../components/footer.js"
import "../styles/global.css"



import { Link } from "gatsby"

export default function HomePage() {
  return (
    <>
    <main>
      <h1>Hi, I'm Juan Espinoza</h1>
      <p>Welcome to my portfolio site!</p>
      <nav className="home-nav">
        <Link to="/projects" className="nav-button">Projects</Link> 
        <Link to="/backlog" className="nav-button">Backlog</Link>
        <Link to="/blog" className="nav-button">Blog</Link> 
        <Link to="/aboutme" className="nav-button">About Me</Link>
      </nav>
    </main>
    <Footer />
    </>
  )
}

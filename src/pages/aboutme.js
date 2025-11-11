import * as React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/global.css"

export default function AboutMe() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Blog", path: "/blog" },
    { label: "Backlog", path: "/backlog" },
    { label: "About Me", path: "/aboutme" },
  ]



  return (
    <>
    <Header links={navLinks} />
    <main style={{ padding: "2rem" }}>
      <h1>About Me</h1>
      <p>Hi! I'm Juan Espinoza, a developer passionate about building clean, responsive websites.</p>
      <p>I enjoy learning new technologies and working on personal projects.</p>
    </main>
    <Footer />
    </>
  )
}

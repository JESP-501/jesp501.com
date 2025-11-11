import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import ProjectCard from "../components/projectcard.js"
import projects from "../data/projects.json"

export default function Projects() {
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
      <main>
        <h1>Projects</h1>
        <p>Indulge in my list of projects over the years of me working in CS</p>
      </main>
      <Footer />
    </>
  )
}

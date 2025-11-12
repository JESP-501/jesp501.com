import React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import ProjectCard from "../components/projectcard.js"
import projectsData from "../data/projects.json"

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
      <main className="projects-page">
      {/* LEFT SIDE - 30% */}
      <aside className="projects-info">
        <h1>Projects</h1>
        <p>Here’s a list of things I’ve been building and experimenting with recently.</p>
      </aside>

      {/* RIGHT SIDE - 70% */}
      <section className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
      <Footer />
    </>
  )
}

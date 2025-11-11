import * as React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/global.css"


export default function Blog() {
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
      <h1>Blog</h1>
      <p>My blog posts will go here.</p>
      <p>For now, this page is a placeholder.</p>
    </main>
    <Footer />
    </>
  )
}

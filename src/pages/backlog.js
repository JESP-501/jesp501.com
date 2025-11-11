import * as React from "react"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import "../styles/global.css"


export default function Backlog() {
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
      <h1>Backlog</h1>
      <h2>I'm a huge fantic of media consumption.</h2>
      <h2>I play Video Games, watch Movies/TV Shows, and read Books</h2>
      <h3>Here’s a list of what I have recently tracked: </h3>
      <ul>
        <li>Game: Persona 3: Reload [2024]</li>
        <li>Game: Dead Space Remake [2023]</li>
        <li>Book: The Hidden Girl and Other Stories by Ken Liu</li>
      </ul>
    </main>
    <Footer />
    </>
  )
}

import React from "react"
import * as Scroll from "react-scroll"

import Project from "../Project"

import "../../styles/section.scss"
import "./projects-section.scss"

const ProjectsSection = (props) => {

  let ScrollHandler = Scroll.Element

  return (
    <section id="projects" className="section projects-section">
      <ScrollHandler name="projects-section"/>
      <h1 className="section__headline">{props.title}</h1>
      <section className="projects-section__projects">
        <Project projects={props.projects}/>
      </section>
  </section>
  )
}

export default ProjectsSection
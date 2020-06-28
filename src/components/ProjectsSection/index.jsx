import React from "react"
import * as Scroll from 'react-scroll'

import Project from "../project"

import "../../styles/section.scss"
import "./projects-section.scss"
import data from '../../data/main-page.en.json'

const ProjectsSection = () => {

  let ScrollHandler = Scroll.Element

  return (
  <section id="projects" className="section projects-section">
    <ScrollHandler name="projects-section" />
    <h1 className="section__headline">{data.projectsSection.headline}</h1>
    <section className="projects-section__projects">
      <Project />
    </section>
  </section>
  )
}

export default ProjectsSection
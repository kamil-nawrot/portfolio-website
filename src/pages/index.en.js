import React, { useEffect, useRef } from "react"

import * as Scroll from 'react-scroll'

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/hero-image"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"

const IndexPage = ({ location }) => {

  var scroller = Scroll.scroller

  useEffect(() => {
    var currentSection = 0
    const sections = ["hero-image-section", "about-section", "projects-section", "contact-section", "footer-section"]
    let count = 0
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        count++
        if (currentSection < sections.length && count === 3) {
          scroller.scrollTo(sections[currentSection + 1], {
            offset: -100
          })
          currentSection = currentSection + 1
          setTimeout(() => { count = 0 }, 250)
        }
      }
      else if (e.deltaY < 0) {
        count--
        if (currentSection > 0 && count === -3) {
          scroller.scrollTo(sections[currentSection - 1], {
            offset: -100
          })
          currentSection = currentSection - 1
          setTimeout(() => { count = 0 }, 200)
        }
      }
      setTimeout(() => { count = 0 }, 200)
    })
  })



  return (
    <Layout location={location} lang="en">
        <SEO title="Home" />
        <HeroImage name="hero-image" />
        <AboutSection />
        <ProjectsSection />
        <ContactSection name="contact-section" />
    </Layout>
  )
}

export default IndexPage

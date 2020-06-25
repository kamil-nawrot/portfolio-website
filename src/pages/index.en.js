import React, { useEffect, useState } from "react"

import * as Scroll from 'react-scroll'
import ReactScrollWheelHandler from 'react-scroll-wheel-handler'

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/hero-image"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"
import ContactSection from "../components/contact-section"
import ScrollIndicator from "../components/scroll-indicator"

const IndexPage = ({ location }) => {

  var scroller = Scroll.scroller
  const sections = ["hero-image-section", "about-section", "projects-section", "contact-section"]
  const [currentSection, setCurrentSection] = useState(0)

  const handleScrollUp = () => {
    if (currentSection > 0) {
      scroller.scrollTo(sections[currentSection - 1], {
        offset: -100
      })
      setCurrentSection(currentSection - 1)
    }
  }

  const handleScrollDown = () => {
    if (currentSection < (sections.length - 1)) {
      scroller.scrollTo(sections[currentSection + 1], {
        offset: -100
      })
      setCurrentSection(currentSection + 1)
    }
  }

  return (
    <Layout location={location} lang="en">
      <ScrollIndicator sections={sections} active={currentSection} />
      <ReactScrollWheelHandler
        upHandler={handleScrollUp}
        downHandler={handleScrollDown}
        timeout={600}
      >
        <SEO title="Home" />
        <HeroImage name="hero-image" />
        <AboutSection />
        <ProjectsSection />
        <ContactSection name="contact-section" />
      </ReactScrollWheelHandler>
    </Layout>
  )
}

export default IndexPage

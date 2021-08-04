import React, { useState, useEffect } from "react"

import * as Scroll from "react-scroll"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroImage from "../components/HeroImage"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import ScrollIndicator from "../components/ScrollIndicator"

import dataPl from "../data/main-page.pl.json"
import useWindowSize from "../utils/useWindowSize"

const IndexPage = ({ location }) => {

    const [isDesktop, setIsDesktop] = useState(() => {
        if (window !== undefined) {
          if (window.innerWidth > 1440) return true;
          else return false;
        }
      })
    
      useEffect(() => {
        window.addEventListener("resize", () => {
          setIsDesktop(window.innerWidth)
        })
    })

    var scroller = Scroll.scroller
    var scroll = Scroll.animateScroll

    const { width } = useWindowSize()

    const sections = ["hero-image-section", "about-section", "projects-section", "contact-section"]
    const [currentSection, setCurrentSection] = useState(0)

    const handleScrollUp = () => {
        if (isDesktop) {
            if (currentSection > 0) {
                scroller.scrollTo(sections[currentSection - 1], {
                    offset: -100
                })
                setCurrentSection(currentSection - 1)
            }
        }
    }

    const handleScrollDown = () => {
        if (isDesktop) {
            if (currentSection < (sections.length - 1)) {
                scroller.scrollTo(sections[currentSection + 1], {
                    offset: -100
                })
                setCurrentSection(currentSection + 1)
            } else if (currentSection == (sections.length - 1)) {
                scroll.scrollToBottom({
                    delay: 0,
                    duration: 50
                })
                setCurrentSection(currentSection + 1)
            }
        }
    }

    return (
      <Layout location={location} lang="pl" header={dataPl.header}
              footer={dataPl.footer}>
          <ScrollIndicator sections={sections} active={currentSection}/>
          <ReactScrollWheelHandler
            upHandler={handleScrollUp}
            downHandler={handleScrollDown}
            timeout={600}
          >
              <SEO title="Home"/>
              <HeroImage
                name="hero-image"
                headline={dataPl.heroImage.headline}
                buttonText={dataPl.heroImage.buttonText}
                description={dataPl.heroImage.description}
              />
              <AboutSection
                name="about-section"
                title={dataPl.aboutSection.title}
                resumeForm={dataPl.aboutSection.resumeForm}
                perks={dataPl.aboutSection.perks}
              />
              <ProjectsSection
                name="projects-section"
                title={dataPl.projectsSection.headline}
                projects={dataPl.projectsSection.projects}
              />
              <ContactSection
                name="contact-section"
                title={dataPl.contactSection.headline}
                contactForm={dataPl.contactSection.contactForm}
              />
          </ReactScrollWheelHandler>
      </Layout>
    )
}

export default IndexPage

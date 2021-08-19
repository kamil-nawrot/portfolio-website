import React, { useState, useEffect } from "react"
import _ from "lodash"

import * as Scroll from "react-scroll"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"
import useWindowSize from "../utils/useWindowSize"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import HeroImage from "../components/HeroImage"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"
import ScrollIndicator from "../components/ScrollIndicator"

import dataEn from "../data/main-page.en.json"

const IndexPage = ({ location }) => {

  console.log(location)

  // const isWindow = typeof window !== "undefined";

  // const [isDesktop, setIsDesktop] = useState(() => {
  //   if (isWindow) {
  //     if (window.innerWidth > 1440) return true;
  //     else return false;
  //   }
  // })

  // useEffect(() => {
  //   if (isWindow) {
  //     window.addEventListener("resize", () => {
  //       setIsDesktop(window.innerWidth)
  //     })
  //   }
  // })

  // var scroller = Scroll.scroller
  // var scroll = Scroll.animateScroll

  // const sections = ["hero-image-section", "about-section", "projects-section", "contact-section"]
  // const [currentSection, setCurrentSection] = useState(0)
  // const [isManual, setIsManual] = useState(true)

  // const handleScrollUp = (e) => {
  //   console.log("handleScrollUp <")
  //   if (isDesktop) {
  //     if (currentSection > 0) {
  //       scroller.scrollTo(sections[currentSection - 1], {
  //         offset: -100
  //       })
  //       setCurrentSection(currentSection - 1)
  //     }
  //   }
  //   console.log("handleScrollUp >")
  //   setIsManual(true)
  // }


  // const handleScrollDown = (e) => {
  //   console.log("handleScrollDown <")
  //   if (isDesktop) {
  //     if (currentSection < (sections.length - 1)) {
  //       scroller.scrollTo(sections[currentSection + 1], {
  //         offset: -100
  //       })
  //       setCurrentSection(currentSection + 1)
  //     } else if (currentSection == (sections.length - 1)) {
  //       scroll.scrollToBottom({
  //         delay: 0,
  //         duration: 50
  //       })
  //       setCurrentSection(currentSection + 1)
  //     }
  //   }
  //   console.log("handleScrollDown >")
  //   setIsManual(true)
  // }

  return (
    <Layout location={location} lang="en" header={dataEn.header}
            footer={dataEn.footer}>
      {/* <ScrollIndicator sections={sections} active={currentSection}/>
      <ReactScrollWheelHandler
        upHandler={handleScrollUp}
        downHandler={handleScrollDown}
        timeout={400}
        preventScroll={true}
      > */}
        <SEO title="Home"/>
        <HeroImage
          name="hero-image"
          headline={dataEn.heroImage.headline}
          buttonText={dataEn.heroImage.buttonText}
          description={dataEn.heroImage.description}
        />
        <AboutSection
          name="about-section"
          title={dataEn.aboutSection.headline}
          resumeForm={dataEn.aboutSection.resumeForm}
          perks={dataEn.aboutSection.perks}
        />
        <ProjectsSection
          name="projects-section"
          title={dataEn.projectsSection.headline}
          projects={dataEn.projectsSection.projects}
        />
        <ContactSection
          name="contact-section"
          title={dataEn.contactSection.headline}
          contactForm={dataEn.contactSection.contactForm}
          socialLinks={dataEn.aboutSection.resumeForm.socialLinks}
        />
      {/* </ReactScrollWheelHandler> */}
    </Layout>
  )
}

export default IndexPage

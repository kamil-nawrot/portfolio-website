import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import HeroImage from "../components/HeroImage"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

import dataPl from "../data/main-page.pl.json"

const IndexPage = ({ location }) => {

  return (
    <Layout location={location} lang="pl" header={dataPl.header}
            footer={dataPl.footer}>
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
              socialLinks={dataPl.aboutSection.resumeForm.socialLinks}
            />
    </Layout>
  )
}

export default IndexPage

import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import HeroImage from "../components/HeroImage"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

import dataEn from "../data/main-page.en.json"

const IndexPage = ({ location }) => {

  return (
    <Layout location={location} lang="en" header={dataEn.header}
            footer={dataEn.footer}>
        <SEO title="Home | Kamil Nawrot"/>
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
    </Layout>
  )
}

export default IndexPage

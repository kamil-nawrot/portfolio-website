import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

<<<<<<< HEAD
import HeroImage from '../components/hero-image'
import AboutSection from '../components/about-section'

const IndexPage = ({ location }) => (
  <Layout location={location} lang="en">
    <SEO title="Home" />
    <HeroImage />
    <AboutSection />
=======
import HeroImage from "../components/hero-image"
import AboutSection from "../components/about-section"
import ProjectsSection from "../components/projects-section"

const IndexPage = ({ location }) => (
  <Layout location={location} lang="en">
    <SEO title="Home"/>
    <HeroImage/>
    <AboutSection/>
    <ProjectsSection/>
>>>>>>> fdeaac5dab8bf8ed3cf021e09bcbc875d83b8067
  </Layout>

export default IndexPage

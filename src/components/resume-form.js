import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

import "../styles/section.scss"
import "../styles/resume.scss"

const ResumeForm = () => {
  const data = useStaticQuery(graphql`
      query {
          resumeImage: file(relativePath: { eq: "resume-form-image.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 960) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  return (
    <BackgroundImage
      Tag="section"
      className="about-section__resume resume"
      fluid={data.resumeImage.childImageSharp.fluid}
    >
      <p className="resume__text">Mermaids resist on future at subspace! Harmless astronauts, to the homeworld. Flavor the leek with raw butterscotch, cumin, black cardamon, and thyme making sure to cover all of it.</p>
      <button className="resume__button">DOWNLOAD RESUME</button>
      <section className="resume__social-icons">
        <FaFacebook className="resume__social-icons__icon" />
        <FaGithub className="resume__social-icons__icon" />
        <FaLinkedin className="resume__social-icons__icon" />
      </section>
    </BackgroundImage>
  )
}

export default ResumeForm
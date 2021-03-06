import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

import "../../styles/section.scss"
import "./resume-form.scss"

const ResumeForm = (props) => {
  const image = useStaticQuery(graphql`
      query {
          resumeImage: file(relativePath: { eq: "images/resume-form-image.jpg" }) {
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
      fluid={image.resumeImage.childImageSharp.fluid}
    >
      <p className="resume__text">{props.resumeForm.description}</p>
      <button className="resume__button">{props.resumeForm.buttonText}</button>
      <section className="resume__social-icons">
        <a href={props.resumeForm.socialLinks.facebook}
           target="_blank"><FaFacebook className="resume__social-icons__icon"/></a>
        <a href={props.resumeForm.socialLinks.github} target="_blank"><FaGithub
          className="resume__social-icons__icon"/></a>
        <a href={props.resumeForm.socialLinks.linkedin}
           target="_blank"><FaLinkedin className="resume__social-icons__icon"/></a>
      </section>
    </BackgroundImage>
  )
}

export default ResumeForm
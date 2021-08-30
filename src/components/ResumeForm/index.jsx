import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

import "../../styles/section.scss"
import "./resume-form.scss"

import resume from "../../images/KamilNawrot_CV_public.pdf"

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
      <a role="button" tabIndex={0} className="resume__button" href={resume} download>{props.resumeForm.buttonText}</a>
      <section className="resume__social-icons">
        <a role="button" tabIndex={0} href={props.resumeForm.socialLinks.facebook}
           target="_blank" rel="noreferrer"><FaFacebook className="resume__social-icons__icon"/></a>
        <a role="button" tabIndex={0} href={props.resumeForm.socialLinks.github} target="_blank" rel="noreferrer"><FaGithub
          className="resume__social-icons__icon"/></a>
        <a role="button" tabIndex={0} href={props.resumeForm.socialLinks.linkedin}
           target="_blank" rel="noreferrer"><FaLinkedin className="resume__social-icons__icon"/></a>
      </section>
    </BackgroundImage>
  )
}

export default ResumeForm
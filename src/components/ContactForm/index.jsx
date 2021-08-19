import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/all"

import "./contact-form.scss"

const ContactForm = (props) => {

  const image = useStaticQuery(graphql`
      query {
          contactFormImage: file(relativePath: { eq: "images/contact-form-bg.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)
  
  const handleSubmit = e => {
    e.preventDefault()
    let formData = new FormData(e.target)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => console.log("Form submitted"))
    .catch(err => console.error(err))
  }

  return (
    <BackgroundImage
      Tag="section"
      className="contact-form"
      fluid={image.contactFormImage.childImageSharp.fluid}
    >
      <section className="contact-form__section">
        <form 
          className="contact-form__form" 
          name="contact" 
          onSubmit={handleSubmit}
          data-netlify="true" 
          data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <span
              className="contact-form__form__label">{props.contactForm.fields[0].name}</span>
            <input type="text" className="contact-form__form__input" required/>
          </label>
          <label>
            <span
              className="contact-form__form__label">{props.contactForm.fields[1].name}</span>
            <input type="email" className="contact-form__form__input" required/>
          </label>
          <label>
            <span
              className="contact-form__form__label">{props.contactForm.fields[2].name}</span>
            <textarea className="contact-form__form__textarea" form="contact" rows="8" minlength="10" required/>
          </label>
          <button
            className="contact-form__form__button">{props.contactForm.buttonText}</button>
        </form>
      </section>
      <section
        className="contact-form__section contact-form__section--secondary">
        <h2
          className="contact-form__section__headline">{props.contactForm.title}</h2>
        <p
          className="contact-form__form__text">{props.contactForm.description}</p>
        <section className="contact-form__section__social-icons">
          <FaFacebook className="contact-form__section__social-icons__icon"/>
          <FaGithub className="contact-form__section__social-icons__icon"/>
          <FaLinkedin className="contact-form__section__social-icons__icon"/>
        </section>
      </section>
    </BackgroundImage>
  )
}

export default ContactForm
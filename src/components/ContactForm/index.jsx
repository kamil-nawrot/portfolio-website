import React from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery, navigate } from "gatsby"
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

  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&")
  }

const handleSubmit = (e) => {
  e.preventDefault()
  fetch("/#contact", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": e.target.getAttribute("name"),
      "name": e.target[0].value,
      "mail": e.target[1].value,
      "content": e.target[2].value
    })
  }).then(() => navigate("/")).catch(error => alert(error))
}

  return (
    <BackgroundImage
      Tag="section"
      className="contact-form"
      fluid={image.contactFormImage.childImageSharp.fluid}
    >
      <section className="contact-form__section">
        <form className="contact-form__form" name="contact" method="post" onSubmit={handleSubmit} data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <label>
            <span
              className="contact-form__form__label">{props.contactForm.fields[0].name}</span>
            <input name="contact-name" type="text" className="contact-form__form__input"/>
          </label>
          <label>
            <span
              className="contact-form__form__label">{props.contactForm.fields[1].name}</span>
            <input name="contact-mail" type="text" className="contact-form__form__input"/>
          </label>
          <label>
            <span
              className="contact-form__form__label">{props.contactForm.fields[2].name}</span>
            <textarea name="contact-text" className="contact-form__form__textarea" rows="8"/>
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
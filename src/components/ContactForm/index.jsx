import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/all"

import './contact-form.scss'
import data from '../../data/main-page.en.json'

const ContactForm = () => {

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

  return (
    <BackgroundImage
      Tag="section"
      className="contact-form"
      fluid={image.contactFormImage.childImageSharp.fluid}
    >
      <section className="contact-form__section">
        <form className="contact-form__form">
          <label>
            <span className="contact-form__form__label">{data.contactSection.contactForm.fields[0].name}</span>
            <input type="text" className="contact-form__form__input" />
          </label>
          <label>
            <span className="contact-form__form__label">{data.contactSection.contactForm.fields[1].name}</span>
            <input type="text" className="contact-form__form__input" />
          </label>
          <label>
            <span className="contact-form__form__label">{data.contactSection.contactForm.fields[2].name}</span>
            <textarea className="contact-form__form__textarea" rows="8" />
          </label>
          <button className="contact-form__form__button">{data.contactSection.contactForm.buttonText}</button>
        </form>
      </section>
      <section className="contact-form__section contact-form__section--secondary">
        <h2 className="contact-form__section__headline">{data.contactSection.contactForm.title}</h2>
        <p className="contact-form__form__text">{data.contactSection.contactForm.description}</p>
        <section className="contact-form__section__social-icons">
          <FaFacebook className="contact-form__section__social-icons__icon" />
          <FaGithub className="contact-form__section__social-icons__icon" />
          <FaLinkedin className="contact-form__section__social-icons__icon" />
        </section>
      </section>
    </BackgroundImage>
  )
}

export default ContactForm
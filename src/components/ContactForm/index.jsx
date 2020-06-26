import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/all"

import './contact-form.scss'

const ContactForm = () => {

  const data = useStaticQuery(graphql`
      query {
          contactFormImage: file(relativePath: { eq: "contact-form-bg.jpg" }) {
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
      fluid={data.contactFormImage.childImageSharp.fluid}
    >
      <section className="contact-form__section">
        <form className="contact-form__form">
          <label>
            <span className="contact-form__form__label">Your name</span>
            <input type="text" className="contact-form__form__input" />
          </label>
          <label>
            <span className="contact-form__form__label">You e-mail address</span>
            <input type="text" className="contact-form__form__input" />
          </label>
          <label>
            <span className="contact-form__form__label">Your message</span>
            <textarea className="contact-form__form__textarea" rows="8" />
          </label>
          <button className="contact-form__form__button">Send</button>
        </form>
      </section>
      <section className="contact-form__section contact-form__section--secondary">
        <h2 className="contact-form__section__headline">Planets walk!</h2>
        <p className="contact-form__form__text">
          Instead of soaking iced water with chickpeas, use one package sour milk and nine oz parsley grinder. Large shrimps can be made sticky by covering with rum. Mash up the carrots with shredded sugar, szechuan pepper, oregano, and brine making sure to cover all of it.
        </p>
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
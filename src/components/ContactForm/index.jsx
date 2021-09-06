import React, { useState } from "react"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/all"
import * as yup from 'yup'

import "./contact-form.scss"

import SubmissionNotification from "../SubmissionNotification"

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

  let formSchema = yup.object().shape({
    contact_name: yup.string().max(64).required(),
    contact_mail: yup.string().email().required(),
    contact_text: yup.string().min(10).max(2000).required(),
  })

  const [notificationVisible, setNotificationVisible] = useState("none")
  const [customMessage, setCustomMessage] = useState(null)
  const [lastSubmissionTime, setLastSubmissionTime] = useState(localStorage.getItem("LAST_SUBMISSION"))
  
  const displayNotification = (type, message = null) => {
    if (message) setCustomMessage(message)
    setNotificationVisible(type)
    setTimeout(() => setNotificationVisible("none"), 3000)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let formData = new FormData(e.target)
    let textContent = document.getElementById("contact-text").value

    formData.append("contact-text", textContent)

    formSchema.validate({
      contact_name: formData.get("contact-name"),
      contact_mail: formData.get("contact-mail"),
      contact_text: formData.get("contact-text")
    })
    .then(valid => {
      if (valid) {
        if (Date.now() - lastSubmissionTime > 900000) {
          let urlData = new URLSearchParams(formData).toString()
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: urlData,
          })
          .then(() => {
            displayNotification("success")
            const submissionDate = Date.now()
            localStorage.setItem("LAST_SUBMISSION", submissionDate)
            setLastSubmissionTime(submissionDate)
          })
          .catch(err => {
            displayNotification("fail")
          })
          .finally(() => {
            setTimeout(() => setNotificationVisible("none"), 3000)
          })
        } else {
          const errorMsg = "You've recently sent a message. Please wait some time before next."
          displayNotification("alert", errorMsg)
        }
      }
    })
    .catch(err => {
      const fieldDict = {
        "contact_name": "Name",
        "contact_mail": "E-mail address field",
        "contact_text": "Message"
      }
      const errorMsg = err.errors[0].replace(/\b(?:contact_name|contact_mail|contact_text)\b/gi, matched => fieldDict[matched])
      displayNotification("fail", errorMsg)
    })
  }

  return (
    <>
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
              <input name="contact-name" type="text" className="contact-form__form__input" />
            </label>
            <label>
              <span
                className="contact-form__form__label">{props.contactForm.fields[1].name}</span>
              <input name="contact-mail" className="contact-form__form__input" />
            </label>
            <label>
              <span
                className="contact-form__form__label">{props.contactForm.fields[2].name}</span>
              <textarea id="contact-text" name="contact-text" className="contact-form__form__textarea" form="contact" rows="8" ></textarea>
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
            <a href={props.socialLinks.facebook}
              target="_blank" rel="noreferrer">
              <FaFacebook className="contact-form__section__social-icons__icon"/>
            </a>
            <a href={props.socialLinks.github}
              target="_blank" rel="noreferrer">
              <FaGithub className="contact-form__section__social-icons__icon"/>
            </a>
            <a href={props.socialLinks.linkedin}
              target="_blank" rel="noreferrer">
              <FaLinkedin className="contact-form__section__social-icons__icon"/>
            </a>
          </section>
        </section>
      </BackgroundImage>
      <SubmissionNotification type={notificationVisible} messages={props.contactForm.messages} customMessage={customMessage} />
    </>
  )
}

export default ContactForm
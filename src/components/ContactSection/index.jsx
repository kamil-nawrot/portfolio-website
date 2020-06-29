import React from "react"
import * as Scroll from "react-scroll"

import ContactForm from "../ContactForm"

const ContactSection = (props) => {

  let ScrollHandler = Scroll.Element

  return (
    <section id="contact" className="section contact-section">
      <ScrollHandler name="contact-section"/>
      <h1 className="section__headline">{props.title}</h1>
      <ContactForm contactForm={props.contactForm}/>
    </section>
  )
}

export default ContactSection
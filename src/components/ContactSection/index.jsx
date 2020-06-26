import React from 'react'
import * as Scroll from 'react-scroll'

import ContactForm from "../ContactForm"

const ContactSection = () => {

  let ScrollHandler = Scroll.Element

  return (
    <section id="contact" className="section contact-section">
      <ScrollHandler name="contact-section"/>
      <h1 className="section__headline">Dubloons whine from strengths like small krakens</h1>
      <ContactForm />
    </section>
  )
}

export default ContactSection
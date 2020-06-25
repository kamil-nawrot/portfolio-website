import React from 'react'
import ContactForm from "./contact-form"

import * as Scroll from 'react-scroll'

var ScrollHandler = Scroll.Element

const ContactSection = () => (
  <section id="contact" className="section contact-section">
    <ScrollHandler name="contact-section" />
    <h1 className="section__headline">Dubloons whine from strengths like small krakens</h1>
    <ContactForm />
  </section>
)

export default ContactSection
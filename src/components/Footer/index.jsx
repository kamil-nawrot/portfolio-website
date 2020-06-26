import React from 'react'

import * as Scroll from 'react-scroll'

import './footer.scss'

const Footer = () => {
  const ScrollHandler = Scroll.Element

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
      <ScrollHandler name="footer-section" />
  </footer>
  )
}

export default Footer
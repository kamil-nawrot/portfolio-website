import React from 'react'

import '../styles/footer.scss'

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </p>
  </footer>
)

export default Footer
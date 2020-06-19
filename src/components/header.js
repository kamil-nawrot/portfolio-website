import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <header className='main-header'>
    <div>
      <h1>
        <Link to="/">
          <span style={{ color: "#888" }}>Kamil</span>Nawrot
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

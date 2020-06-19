import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from '../components/menu'

import '../styles/header.scss'
import '../styles/_variables.scss'

const Header = ({ location, lang, siteTitle, menuItems, languages }) => (
  <header className='main-header'>
      <h1 className='main-header__logo'>
        <Link to="/">
          <span className='main-header__logo--accent'>Kamil</span>Nawrot
        </Link>
      </h1>
    <Menu location={location} lang={lang} menuItems={menuItems} languages={languages} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.string),
  languages: PropTypes.arrayOf(PropTypes.string),
}

Header.defaultProps = {
  siteTitle: ``,
  menuItems: [],
  languages: [],
}

export default Header

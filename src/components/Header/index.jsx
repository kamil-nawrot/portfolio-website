import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "../menu"

import "./header.scss"
import data from '../../data/main-page.en.json'

const Header = ({ location, lang, menuItems, languages }) => {

  return (
    <header className="main-header">
      <div className="main-header__content">
        <h1 className="main-header__logo">
          <Link to={lang === "en" ? "/" : "/pl"}>
            <span className="main-header__logo--accent">Kamil</span>Nawrot
          </Link>
        </h1>
        <Menu
          location={location}
          lang={lang}
          menuItems={data.header.menu}
          languages={data.header.languages}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.object,
  lang: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.object),
  languages: PropTypes.arrayOf(PropTypes.string)
}

Header.defaultProps = {
  lang: "en",
  menuItems: [],
  languages: []
}

export default Header

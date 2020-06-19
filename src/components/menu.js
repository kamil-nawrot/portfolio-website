import PropTypes from "prop-types"
import React from "react"
import { Link } from "@reach/router"

import "../styles/main-menu.scss"
import LanguageSwitcher from "./language-switcher"

const Menu = ({ location, lang, menuItems, languages }) => {
  return (
    <nav className="main-menu">
      <ul className="main-menu__items">
        {menuItems.map(menuItem => (
          <li key={menuItem} className="main-menu__item">
            <Link to={`/${menuItem.replace(" ", "-")}`}>{menuItem}</Link>
          </li>
        ))}
      </ul>
      <LanguageSwitcher location={location} lang={lang} languages={languages} />
    </nav>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string),
  languages: PropTypes.arrayOf(PropTypes.string),
}

Menu.defaultProps = {
  menuItems: [],
  languages: [],
}

export default Menu

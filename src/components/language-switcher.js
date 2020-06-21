import { Link } from "@reach/router"
import PropTypes from "prop-types"
import React from "react"

import "../styles/language-switcher.scss"

const LanguageSwitcher = ({ location, lang, languages }) => {
  const isDefault = !location.pathname.includes("/pl")
  return (
    <ul className="main-menu__items language-switcher">
      <li
        className={`language-switcher__language language-switcher__language${
          isDefault ? "--active" : ""
        }`}
      >
        {isDefault ? (
          "EN"
        ) : (
          <Link to={location.pathname.replace("/pl", "")}>EN</Link>
        )}
      </li>
      <span className="language-switcher__divider">|</span>
      <li
        className={`language-switcher__language language-switcher__language${
          isDefault ? "" : "--active"
        }`}
      >
        {isDefault ? <Link to={`pl${location.pathname}`}>PL</Link> : "PL"}
      </li>
    </ul>
  )
}

LanguageSwitcher.propTypes = {
  location: PropTypes.object,
  lang: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string),
}

LanguageSwitcher.defaultProps = {
  lang: "en",
  languages: ["en", "pl"],
}

export default LanguageSwitcher

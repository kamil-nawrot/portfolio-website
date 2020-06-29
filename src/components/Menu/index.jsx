import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Link } from "@reach/router"

import "./menu.scss"
import LanguageSwitcher from "../LanguageSwitcher"
import { GiHamburgerMenu } from "react-icons/gi"

const Menu = ({ location, lang, menuItems, languages, mobile }) => {

  const [isMobile, setIsMobile] = useState(mobile)
  const [menuVisibility, setMenuVisibility] = useState(false)

  useEffect((props) => {
    window.addEventListener("resize", () => {
      window.innerWidth > 1024 ? setIsMobile(false) : setIsMobile(true)
    })
  })

  console.log(isMobile)

  return (
    <nav className={!isMobile ? "main-menu" : "main-menu--mobile"}>
      {!isMobile ? (
        <>
          <ul className="main-menu__items">
            {menuItems.map(menuItem => (
              <li key={menuItem.name} className="main-menu__item">
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher location={location} lang={lang}
                            languages={languages}/>
        </>
      ) : (
        <>
          <div onClick={() => setMenuVisibility(!menuVisibility)}
               className="main-menu__icon-wrapper">
            <GiHamburgerMenu className="main-menu__icon"/>
          </div>
          <ul
            className={`main-menu__items${menuVisibility ? " main-menu__items--active" : ""}`}>
            {menuItems.map(menuItem => (
              <li key={menuItem.name} className="main-menu__item">
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )
      }
    </nav>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
  languages: PropTypes.arrayOf(PropTypes.string)
}

Menu.defaultProps = {
  menuItems: [],
  languages: []
}

export default Menu

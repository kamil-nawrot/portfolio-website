import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "@reach/router"
import useWindowSize from "../../utils/useWindowSize"

import "./menu.scss"
import LanguageSwitcher from "../LanguageSwitcher"
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect } from "react"

const Menu = ({ location, lang, menuItems, languages, windowWidth }) => {

  const { width } = useWindowSize()
  const [menuVisibility, setMenuVisibility] = useState(false)

  const isWindow = typeof window !== "undefined";

  useEffect(() => {
    if (isWindow) {
      window.addEventListener("scroll", () => {
        setMenuVisibility(false)
      })
    }
  })

  return (
    <>
      {width !== 1 && ((width < 1024) ? (
        <nav className="main-menu--mobile">
          <div onClick={() => setMenuVisibility(!menuVisibility)}
               className="main-menu__icon-wrapper">
            <GiHamburgerMenu className="main-menu__icon"/>
          </div>
          <ul
            className={`main-menu__items${menuVisibility ? " main-menu__items--active" : ""}`}>
            {menuItems.map(menuItem => (
              <li key={menuItem.name} className={`${menuVisibility ? " main-menu__item--active" : "main-menu__item"}`}>
                <Link to={menuItem.path} onClick={() => setMenuVisibility(false)}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : (
        <nav className="main-menu">
          <ul className="main-menu__items">
            {menuItems.map(menuItem => (
              <li key={menuItem.name} className="main-menu__item">
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher location={location} lang={lang}
                            languages={languages}/>
        </nav>))}
    </>
  )

  // return (
  //   <>
  //     {width > 1024 ? (
  //       <nav className="main-menu">
  //         <ul className="main-menu__items">
  //           {menuItems.map(menuItem => (
  //             <li key={menuItem.name} className="main-menu__item">
  //               <Link to={menuItem.path}>{menuItem.name}</Link>
  //             </li>
  //           ))}
  //         </ul>
  //         <LanguageSwitcher location={location} lang={lang}
  //                           languages={languages}/>
  //       </nav>
  //     ) : (
  //       <nav className="main-menu--mobile">
  //         <div onClick={() => setMenuVisibility(!menuVisibility)}
  //              className="main-menu__icon-wrapper">
  //           <GiHamburgerMenu className="main-menu__icon"/>
  //         </div>
  //         <ul
  //           className={`main-menu__items${menuVisibility ? " main-menu__items--active" : ""}`}>
  //           {menuItems.map(menuItem => (
  //             <li key={menuItem.name} className="main-menu__item">
  //               <Link to={menuItem.path}>{menuItem.name}</Link>
  //             </li>
  //           ))}
  //         </ul>
  //       </nav>
  //     )
  //     }
  //     </>
  // )
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

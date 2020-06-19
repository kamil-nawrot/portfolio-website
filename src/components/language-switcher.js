import { Link } from '@reach/router'
import PropTypes from "prop-types"
import React from 'react'

const LanguageSwitcher = ({location, lang, languages}) => {
    console.log(location)
    console.log(lang)
    return (
      <ul className="main-menu__items">
          <li>{location.pathname.includes('pl') ? (<Link to={location.pathname.replace('/pl', '/')}>EN</Link>) : ('EN')}</li>
          <li>{location.pathname.includes('pl') ? ('PL') : (<Link to={`pl/${location.pathname}`}>PL</Link>)}</li>
      </ul>
    );
}

export default LanguageSwitcher

import { Link } from '@reach/router'
import PropTypes from "prop-types"
import React from 'react'

import '../styles/language-switcher.scss'

const LanguageSwitcher = ({location, lang, languages}) => {
    const isPl = location.pathname.includes('pl');
    return (
      <ul className="main-menu__items language-switcher">
          <li className={`language-switcher__language language-switcher__language${isPl ? '' : '--active'}`}>{isPl ? (<Link to={location.pathname.replace('/pl', '/')}>EN</Link>) : ('EN')}</li>
          <span className='language-switcher__divider'>|</span>
          <li className={`language-switcher__language language-switcher__language${isPl ? '--active' : ''}`}>{isPl ? ('PL') : (<Link to={`pl/${location.pathname}`}>PL</Link>)}</li>
      </ul>
    );
}

export default LanguageSwitcher

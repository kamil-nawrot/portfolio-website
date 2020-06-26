import React from 'react'

import ReactIcon from '../../images/tech-icons/react.icon.svg'
import ReduxIcon from '../../images/tech-icons/redux.icon.svg'
import JsIcon from '../../images/tech-icons/javascript.icon.svg'
import CssIcon from '../../images/tech-icons/css5.icon.svg'
import HtmlIcon from '../../images/tech-icons/html5.icon.svg'
import NodeIcon from '../../images/tech-icons/nodejs.icon.svg'
import WordpressIcon from '../../images/tech-icons/wordpress.icon.svg'

import './technologies.scss'

const Technologies = () => (
  <section className="technologies">
    <ReactIcon className="technologies__icon" />
    <ReduxIcon className="technologies__icon" />
    <HtmlIcon className="technologies__icon" />
    <CssIcon className="technologies__icon" />
    <JsIcon className="technologies__icon" />
    <WordpressIcon className="technologies__icon" />
    <NodeIcon className="technologies__icon" />
  </section>
)

export default Technologies
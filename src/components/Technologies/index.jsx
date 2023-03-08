import React from 'react'

import JsIcon from '../../images/tech-icons/javascript.icon.svg'
import CssIcon from '../../images/tech-icons/css5.icon.svg'
import HtmlIcon from '../../images/tech-icons/html5.icon.svg'
import NodeIcon from '../../images/tech-icons/nodejs.icon.svg'
import AngularIcon from '../../images/tech-icons/angular.icon.svg'
import RxjsIcon from '../../images/tech-icons/rxjs.icon.svg'
import GraphqlIcon from '../../images/tech-icons/graphql.icon.svg'

import './technologies.scss'

const Technologies = () => (
  <section className="technologies">
    <AngularIcon className="technologies__icon" />
    <RxjsIcon className="technologies__icon" />
    <HtmlIcon className="technologies__icon" />
    <CssIcon className="technologies__icon" />
    <JsIcon className="technologies__icon" />
    <GraphqlIcon className="technologies__icon" />
    <NodeIcon className="technologies__icon" />
  </section>
)

export default Technologies

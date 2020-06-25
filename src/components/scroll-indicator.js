import React, { useEffect } from "react"

import '../styles/scroll-indicator.scss'

const ScrollIndicator = (props) => {
  return (
    <div className="scroll-indicator">
      {props.sections.map((section, index) => {
        return (
          <div key={section} className={`scroll-indicator__dot ${(props.active === index) ? 'scroll-indicator__dot--active' : ''}`} />
        )
      })}
    </div>
  )
}



export default ScrollIndicator
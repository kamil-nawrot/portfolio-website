/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import * as Scroll from "react-scroll"
import ReactScrollWheelHandler from "react-scroll-wheel-handler"

import ScrollIndicator from "../ScrollIndicator"
import Header from "../Header"
import Footer from "../Footer"
import "./layout.css"
import scrollElement from "react-scroll/modules/mixins/scroll-element"

const Layout = ({ location, lang, children, header, footer }) => {

  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  menuItems {
                      name
                      path
                  }
                  languages
              }
          }
      }
  `)

  const isWindow = typeof window !== "undefined";

  const [isDesktop, setIsDesktop] = useState(() => {
    if (isWindow) {
      if (window.innerWidth > 1440) return true;
      else return false;
    }
  })

  useEffect(() => {
    if (isWindow) {
      window.addEventListener("resize", () => {
        setIsDesktop(window.innerWidth)
      })
    }
  })

  // var scroller = Scroll.scroller
  // var scroll = Scroll.animateScroll

  // const sections = ["hero-image-section", "about-section", "projects-section", "contact-section"]
  // const [currentSection, setCurrentSection] = useState(0)

  // const handleScrollUp = (e) => {
  //   console.log("handleScrollUp <")
  //   if (isDesktop) {
  //     if (currentSection > 0) {
  //       scroller.scrollTo(sections[currentSection - 1], {
  //         offset: -100
  //       })
  //       setCurrentSection(currentSection - 1)
  //     }
  //   }
  //   console.log("handleScrollUp >")
  // }


  // const handleScrollDown = (e) => {
  //   console.log("handleScrollDown <")
  //   if (isDesktop) {
  //     if (currentSection < (sections.length - 1)) {
  //       scroller.scrollTo(sections[currentSection + 1], {
  //         offset: -100
  //       })
  //       setCurrentSection(currentSection + 1)
  //     } else if (currentSection == (sections.length - 1)) {
  //       scroll.scrollToBottom({
  //         delay: 0,
  //         duration: 50
  //       })
  //       setCurrentSection(currentSection + 1)
  //     }
  //   }
  //   console.log("handleScrollDown >")
  // }

  return (
    <>
      <Header
        location={location}
        lang={lang}
        menuItems={header.menuItems}
        languages={data.site.siteMetadata.languages}
        logo={header.logo}
      />
      <div>
        <main>
          {/* <ScrollIndicator sections={sections} active={currentSection}/>
          <ReactScrollWheelHandler
            upHandler={handleScrollUp}
            downHandler={handleScrollDown}
            timeout={400}
            preventScroll={true}
          > */}
          {children}
          {/* </ReactScrollWheelHandler> */}
          </main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.object,
  lang: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

Layout.defaultProps = {
  lang: "en"
}


export default Layout

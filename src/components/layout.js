/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ location, lang, children }) => {
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

  return (
    <>
      <Header location={location} lang={lang} menuItems={data.site.siteMetadata.menuItems} languages={data.site.siteMetadata.languages} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.object,
  lang: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  lang: "en",
}


export default Layout

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({location}) => (
  <Layout location={location} lang="pl">
    <SEO title="Page two" />
    <h1>Druga strona</h1>
    <p>Welcome to page 2</p>
    <Link to="/pl">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

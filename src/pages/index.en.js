import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/layout.scss'

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const IndexPage = ({location}) => (
  <Layout location={location} lang="en">
    <SEO title="Home" />
    <div className='hero-image'>
      <HeroImage className='hero-image__image' />
    </div>
  </Layout>
)

export default IndexPage

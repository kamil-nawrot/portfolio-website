import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/layout.scss'

const HeroImage = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage Tag="section" className="hero-image" fluid={data.heroImage.childImageSharp.fluid}>
      <div className="hero-image__content">
        <h1 className="hero-image__content__headline">Lorem ipsum dolor sit amet</h1>
        <button className="hero-image__content__button">Quesi varites semiratiu</button>
        <p className="hero-image__content__paragraph">Eu et eu veniam eu velit incididunt minim culpa incididunt ad id quis consequat amet. Lorem consectetur consequat mollit quis do eiusmod enim consequat. Nostrud voluptate nostrud eiusmod mollit Lorem minim eu voluptate aute aliqua qui tempor. Cupidatat amet voluptate adipisicing mollit incididunt deserunt proident. In laborum laborum irure consequat consequat officia ex excepteur cillum eu eiusmod ex mollit sint. Veniam ea ullamco deserunt id in aute laborum labore anim culpa nulla.</p>
      </div>
    </BackgroundImage>
  );
}

const IndexPage = ({location}) => (
  <Layout location={location} lang="en">
    <SEO title="Home" />
    <HeroImage />
  </Layout>
)

export default IndexPage

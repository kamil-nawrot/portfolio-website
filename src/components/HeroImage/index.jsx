import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { MdExpandMore } from "react-icons/md"

import * as Scroll from "react-scroll"

import "./hero-image.scss"

const HeroImage = (props) => {

  const image = useStaticQuery(graphql`
      query {
          heroImage: file(relativePath: { eq: "images/hero-image.jpg" }) {
              childImageSharp {
                  fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  let ScrollHandler = Scroll.Element;

  return (
    <BackgroundImage
      Tag="section"
      className="hero-image"
      fluid={image.heroImage.childImageSharp.fluid}
    >
      <ScrollHandler name="hero-image-section" />
      <div className="hero-image__content">
        <div className="hero-image__content__element-wrapper hero-image__content__element-wrapper--upper">
          <h1 className="hero-image__content__element hero-image__content__headline">
            {props.headline}
          </h1>
        </div>
        <div className="hero-image__content__element-wrapper hero-image__content__element-wrapper--middle">
          <button className="hero-image__content__element hero-image__content__button">
            {props.buttonText}
          </button>
        </div>
        <div className="hero-image__content__element-wrapper hero-image__content__element-wrapper--bottom">
          <p className="hero-image__content__paragraph">
            {props.description}
          </p>
        </div>
      </div>
      <aside className="hero-image__scroll">
        <Link to="#about">
          <MdExpandMore className="hero-image__scroll__icon"/>
        </Link>
      </aside>
    </BackgroundImage>
  )
}

export default HeroImage
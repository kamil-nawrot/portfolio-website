import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import * as Scroll from 'react-scroll'

import { MdExpandMore } from "react-icons/md"
import "./hero-image.scss"


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

  let ScrollHandler = Scroll.Element;

  return (
    <BackgroundImage
      Tag="section"
      className="hero-image"
      fluid={data.heroImage.childImageSharp.fluid}
    >
      <ScrollHandler name="hero-image-section" />
      <div className="hero-image__content">
        <div className="hero-image__content__element-wrapper hero-image__content__element-wrapper--upper">
          <h1 className="hero-image__content__element hero-image__content__headline">
            Lorem ipsum dolor sit amet
          </h1>
        </div>
        <div className="hero-image__content__element-wrapper hero-image__content__element-wrapper--middle">
          <button className="hero-image__content__element hero-image__content__button">
            Quesi varites semiratiu
          </button>
        </div>
        <div className="hero-image__content__element-wrapper hero-image__content__element-wrapper--bottom">
          <p className="hero-image__content__paragraph">
            Eu et eu veniam eu velit incididunt minim culpa incididunt ad id quis
            consequat amet. Lorem consectetur consequat mollit quis do eiusmod
            enim consequat. Nostrud voluptate nostrud eiusmod mollit Lorem minim
            eu voluptate aute aliqua qui tempor. Cupidatat amet voluptate
            adipisicing mollit incididunt deserunt proident. In laborum laborum
            irure consequat consequat officia ex excepteur cillum eu eiusmod ex
            mollit sint. Veniam ea ullamco deserunt id in aute laborum labore anim
            culpa nulla.
          </p>
        </div>
      </div>
      <aside className="hero-image__scroll">
        <MdExpandMore className="hero-image__scroll__icon"/>
      </aside>
    </BackgroundImage>
  )
}

export default HeroImage
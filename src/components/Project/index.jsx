import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-background-image"

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"

import "./project.scss"

const Project = (props) => {

  const images = useStaticQuery(graphql`
      query {
          projectImages: allFile(filter: {relativeDirectory: { eq: "images/projects" }}) {
              edges {
                  node {
                      childImageSharp {
                          fluid(maxWidth: 1920) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                      name
                  }
              }
          }
      }
  `)

  let initialState = [];
  for (let i = 0; i < images.projectImages.edges.length; i++) initialState.push(i);
  const [currentPosition, setCurrentPosition] = useState(initialState);

  const getImage = (pos) => {
    return images.projectImages.edges.filter(edge => edge.node.name === props.projects[currentPosition[pos]].imagePath)[0].node.childImageSharp.fluid
  }

  return (
    <article className="project-carousel">
      <Image
        className="project__prev"
        // style={{ position: "absolute" }}
        fluid={getImage(0)}
      />
    <BackgroundImage
      Tag="section"
      className="project"
      fluid={getImage(1)}
    >
      <section className="project__content">
        <h2
          className="project__content__title">{props.projects[currentPosition[1]].title}</h2>
        <p
          className="project__content__description">{props.projects[currentPosition[1]].description}</p>
      </section>
      <section className="project__content__navigation">
        <MdNavigateBefore className="project__content__navigation__arrow"
                          onClick={() => setCurrentPosition(prevPos => prevPos.map(p => {
                            return p === 0 ? (prevPos.length - 1) : p - 1
                          }))}/>
        <MdNavigateNext className="project__content__navigation__arrow"
                        onClick={() => setCurrentPosition(prevPos => prevPos.map(p => {
                          return p === (prevPos.length - 1) ? 0 : p + 1
                        }))}/>
      </section>
    </BackgroundImage>
      <Image
        className="project__next"
        fluid={getImage(2)}
      />
    </article>
  )
}

export default Project
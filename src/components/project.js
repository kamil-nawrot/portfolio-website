import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Image from "gatsby-background-image"

import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"

import '../styles/project.scss'

const Project = () => {

  const data = useStaticQuery(graphql`
      query {
          projectImages: allFile(filter: {relativeDirectory: { eq: "projects" }}) {
              edges {
                  node {
                      childImageSharp {
                          fluid(maxWidth: 1080) {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  `)

  let initialState = [];
  for (let i = 0; i < data.projectImages.edges.length; i++) initialState.push(i);
  const [currentPosition, setCurrentPosition] = useState(initialState);

  return (
    <article className="project-carousel">
      <Image
        className="project__prev"
        fluid={data.projectImages.edges[currentPosition[0]].node.childImageSharp.fluid}
      />
    <BackgroundImage
      Tag="section"
      className="project"
      fluid={data.projectImages.edges[currentPosition[1]].node.childImageSharp.fluid}
    >
      <section className="project__content">
        <h2 className="project__content__title">Lorem ipsum</h2>
        <p className="project__content__description">Sunt lumenes fallere lotus, altus luraes. Est bi-color candidatus, cesaris. Est castus luna, cesaris.Ubi est regius resistentia?</p>
      </section>
      <section className="project__content__navigation">
        <MdNavigateBefore className="project__content__navigation__arrow" onClick={() => setCurrentPosition(prevPos => prevPos.map(p => {
          return p === 0 ? (prevPos.length - 1) : p - 1;
        }))} />
        <MdNavigateNext className="project__content__navigation__arrow" onClick={() => setCurrentPosition(prevPos => prevPos.map(p => {
          return p === (prevPos.length - 1) ? 0 : p + 1;
        }))} />
      </section>
    </BackgroundImage>
      <Image
        className="project__next"
        fluid={data.projectImages.edges[currentPosition[2]].node.childImageSharp.fluid}
      />
    </article>
  )
}

export default Project
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image" 

import Layout from "../components/Layout"

import "../styles/404-page.scss"

import dataEn from "../data/main-page.en.json"

const NotFoundPage = ({ location }) => {

    const image = useStaticQuery(graphql`
        query {
            notFoundImage: file(relativePath: { eq: "images/404-bg.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout location={location} lang="en" header={dataEn.header}
        footer={dataEn.footer}>
            <BackgroundImage
                Tag="section"
                className="not-found-section"
                fluid={image.notFoundImage.childImageSharp.fluid}
            >
                <div className="not-found-section__content">
                    <h1 className="not-found-section__content__headline">
                        Unfortunately, there's nothing here.
                    </h1>
                    <p className="not-found-section__content__paragraph">
                        But don't worry, here's something that'll bring you back on track:
                    </p>
                    <button className="not-found-section__content__button">
                        &lt; Back to homepage
                    </button>
                </div>
            </BackgroundImage>
        </Layout>
    )
}

export default NotFoundPage


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
                className="not-found-image"
                fluid={image.notFoundImage.childImageSharp.fluid}
            >
                <p>dupa</p>
            </BackgroundImage>
        </Layout>
    )
}

export default NotFoundPage


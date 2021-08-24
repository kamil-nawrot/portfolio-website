import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image" 

import Layout from "../components/Layout"

import "../styles/404-page.scss"

import dataPl from "../data/main-page.pl.json"

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
        <Layout location={location} lang="pl" header={dataPl.header}
        footer={dataPl.footer}>
            <BackgroundImage
                Tag="section"
                className="not-found-section"
                fluid={image.notFoundImage.childImageSharp.fluid}
            >
                <div className="not-found-section__content">
                    <h1 className="not-found-section__content__headline">
                        {dataPl.notFound.headline}
                    </h1>
                    <p className="not-found-section__content__paragraph">
                        {dataPl.notFound.text}
                    </p>
                    <Link to="/pl">
                        <button className="not-found-section__content__button">
                            {dataPl.notFound.buttonText}
                        </button>
                    </Link>
                </div>
            </BackgroundImage>
        </Layout>
    )
}

export default NotFoundPage


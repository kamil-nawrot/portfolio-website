import React from 'react'
import { useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import '../styles/section.scss'

const ResumeForm = () => {
    const data = useStaticQuery(graphql`
      query {
        heroImage: file(relativePath: { eq: "resume-form-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)

    return (
        <BackgroundImage
            Tag="section"
            className="about-section__resume"
            fluid={data.heroImage.childImageSharp.fluid}
        >

        </BackgroundImage>
    );
}

export default ResumeForm
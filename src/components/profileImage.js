import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// 559 / 779
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ty_profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default Image

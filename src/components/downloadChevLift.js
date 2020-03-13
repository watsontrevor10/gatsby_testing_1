import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const DownloadChevLift = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chevlift.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1100, maxHeight: 700) {
            ...GatsbyImageSharpFluid
            originalName
            originalImg
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} />
}

export default DownloadChevLift

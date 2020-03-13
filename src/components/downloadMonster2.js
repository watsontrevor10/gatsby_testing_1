import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const DownloadMonster2 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "monster2.jpg.JPG" }) {
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

export default DownloadMonster2

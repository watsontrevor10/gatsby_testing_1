import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadMonster2 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "monster2.jpg.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 800) {
            ...GatsbyImageSharpFluid
            originalName
            originalImg
          }
        }
      }
    }
  `)

  return (
    <>
      <a
        href={
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/monster2_xyqitg.pdf"
        }
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </a>
    </>
  )
}

export default DownloadMonster2

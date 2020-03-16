import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadMonster3 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "monster3.jpg.JPG" }) {
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
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/monster3_h7lvt2.pdf"
        }
        download
        target="_blank"
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </a>
    </>
  )
}

export default DownloadMonster3

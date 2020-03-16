import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadBigLift = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "biglift.jpg" }) {
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
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394747/Ty%20Watson/biglift_b8p6ge.pdf"
        }
        target="_blank"
        download
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ maxWidth: "100%" }}
        />
      </a>
    </>
  )
}

export default DownloadBigLift

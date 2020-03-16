import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadGmcTruck = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gmctruck.jpg" }) {
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
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394746/Ty%20Watson/gmctruck_tunhmm.pdf"
        }
        target="_blank"
        download
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </a>
    </>
  )
}

export default DownloadGmcTruck

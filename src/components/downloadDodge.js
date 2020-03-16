import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadDodge = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "dodge.jpg" }) {
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
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584133431/Ty%20Watson/dodge_wsvna8.jpg"
        }
        download
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </a>
      <div
        style={{
          margin: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href={
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1584133431/Ty%20Watson/dodge_wsvna8.jpg"
          }
          download
        >
          <Button>Download</Button>
        </a>
      </div>
    </>
  )
}

export default DownloadDodge

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadChevLift = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chevlift.jpg" }) {
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
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/chevlift_hajpso.pdf"
        }
        target="_blank"
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
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/chevlift_hajpso.pdf"
          }
          target="_blank"
          download
        >
          <Button>Download</Button>
        </a>
      </div>
    </>
  )
}

export default DownloadChevLift

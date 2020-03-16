import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadBigLift = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "biglift.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 900) {
            ...GatsbyImageSharpFluid
            originalName
            originalImg
          }
        }
        absolutePath
      }
    }
  `)

  return (
    <>
      <Img fluid={data.file.childImageSharp.fluid}  style={{ maxWidth: '100%' }} />
      <div style={{ margin: "8px", display: "flex", alignItems: "center", justifyContent: 'center' }}>
        <a
          href={
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1584133432/Ty%20Watson/biglift_osqxoa.jpg"
          }
          download
        >
          <Button>Download</Button>
        </a>
      </div>
    </>
  )
}

export default DownloadBigLift

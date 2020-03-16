import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from '../components/PrimaryButton'

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
      <Img fluid={data.file.childImageSharp.fluid} />
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
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1584133430/Ty%20Watson/gmctruck_vmsabk.jpg"
          }
          download
        >
          <Button>Download</Button>
        </a>
      </div>
    </>
  )
}

export default DownloadGmcTruck

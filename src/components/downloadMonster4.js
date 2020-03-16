import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../components/PrimaryButton"

const DownloadMonster4 = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "monster4.jpg.JPG" }) {
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
          "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394750/Ty%20Watson/monster4_oegkmx.pdf"
        }
        target="_blank"
        download
      >
        <Img fluid={data.file.childImageSharp.fluid} />
      </a>
      {/* <div
        style={{
          margin: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href={
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394750/Ty%20Watson/monster4_oegkmx.pdf"
          }
          target="_blank"
          download
        >
          <Button>Download</Button>
        </a>
      </div> */}
    </>
  )
}

export default DownloadMonster4

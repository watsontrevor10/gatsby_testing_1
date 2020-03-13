import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from '../components/PrimaryButton'

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
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1584133431/Ty%20Watson/monster3.jpg_rkjdyp.jpg"
          }
          download
        >
          <Button>Download</Button>
        </a>
      </div>
    </>
  )
}

export default DownloadMonster3

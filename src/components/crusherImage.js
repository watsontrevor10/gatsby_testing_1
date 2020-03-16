import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// 559 / 779
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "crusher.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <a
      href="https://www.amazon.com/Custom-Crusher-Coloring-Book-Books/dp/1548150916/ref=sr_1_2?keywords=ty+watson&qid=1583357258&s=books&sr=1-2"
      target="_blank"
    >
      <Img fluid={data.file.childImageSharp.fluid} />
    </a>
  )
}

export default Image

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "wacky.jpg" }) {
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
      href="https://www.amazon.com/Wild-Wacky-Semi-Trucks-Coloring-Book/dp/1690659416/ref=sr_1_1?keywords=ty+watson&qid=1583357258&s=books&sr=1-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImg fluid={data.file.childImageSharp.fluid} />
    </a>
  )
}

const StyledImg = styled(Img)`
  width: 100%;
  backface-visibility: hidden;
  position: relative;

  transition: .5s ease;
`

export default Image

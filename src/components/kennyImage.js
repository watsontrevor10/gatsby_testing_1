import React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kenny.jpg" }) {
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
      href="https://www.amazon.com/Old-Kenny-Semi-Truck-Coloring-Book/dp/1724398199/ref=sr_1_3?keywords=ty+watson&qid=1583357258&s=books&sr=1-3"
      target="_blank"
    >
      <StyledImg fluid={data.file.childImageSharp.fluid} />
    </a>
  )
}

const StyledImg = styled(Img)`
  width: 100%;
  backface-visibility: hidden;
  position: relative;

  transition: 0.5s ease;
`

export default Image

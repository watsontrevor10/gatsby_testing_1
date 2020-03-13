import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Layout from "../components/layout"
import BigLift from "../components/downloadBigLift"
import ChevLift from "../components/downloadChevLift"
import Dodge from "../components/downloadDodge"
import GMCTruck from "../components/downloadGmcTruck"
import Monster1 from "../components/downloadMonster1"
import Monster2 from "../components/downloadMonster2"
import Monster3 from "../components/downloadMonster3"
import Monster4 from "../components/downloadMonster4"
// import Img from "gatsby-image"

const Downloads = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "dodge.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1100, maxHeight: 700) {
  //           ...GatsbyImageSharpFluid
  //           originalName
  //           originalImg
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Layout>
      <h1>Sample Drawings</h1>
      <p>Feel free to download some free pictures</p>
      <div style={{ display: 'flex', flexDirection: 'row-responsive' }}>
        <ImageContainer>
          <Dodge />
        </ImageContainer>
        <ImageContainer>
          <BigLift />
        </ImageContainer>
        <ImageContainer>
          <ChevLift />
        </ImageContainer>
        <ImageContainer>
          <GMCTruck />
        </ImageContainer>
        <ImageContainer>
          <Monster1 />
        </ImageContainer>
        <ImageContainer>
          <Monster2 />
        </ImageContainer>
        <ImageContainer>
          <Monster3 />
        </ImageContainer>
        <ImageContainer>
          <Monster4 />
        </ImageContainer>
      </div>
    </Layout>
  )
}

const ImageContainer = styled.div`
  width: 400px;

`

export default Downloads

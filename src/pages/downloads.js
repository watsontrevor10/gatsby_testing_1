import React from "react"
import {} from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BigLift from "../components/downloadBigLift"
import ChevLift from "../components/downloadChevLift"
import Dodge from "../components/downloadDodge"
import GMCTruck from "../components/downloadGmcTruck"
import Monster1 from "../components/downloadMonster1"
import Monster2 from "../components/downloadMonster2"
import Monster3 from "../components/downloadMonster3"
import Monster4 from "../components/downloadMonster4"

const Downloads = () => {
  return (
    <Layout>
      <h1>Sample Drawings</h1>
      <p>Feel free to download some free pictures</p>
      <MainContainer>
        <ImageContainer>
          <a>
            <Dodge />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a>
            <ChevLift />
          </a>
        </ImageContainer>
        <ImageContainer>
          <a>
          <GMCTruck />

          </a>
        </ImageContainer>
        <ImageContainer>
          <a>
          <BigLift />

          </a>
        </ImageContainer>
        <ImageContainer>
          <a>
          <Monster1 />

          </a>
        </ImageContainer>
        <ImageContainer>
          <a>
          <Monster2 />

          </a>
        </ImageContainer>
        <ImageContainer>
          <Monster3 />
        </ImageContainer>
        <ImageContainer>
          <Monster4 />
        </ImageContainer>
      </MainContainer>
    </Layout>
  )
}

const MainContainer = styled.div`
  column-count: 2;
`

const ImageContainer = styled.div`
  max-width: 400px;
  margin: 5px;
  border: 2px solid black;
  break-inside: avoid-column;
`

export default Downloads

import React from "react"
import {} from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import BigLift from "../components/downloadBigLift"
import ChevLift from "../components/downloadChevLift"
import Dodge from "../components/downloadDodge"
import GMCTruck from "../components/downloadGmcTruck"
import Monster1 from "../components/downloadMonster1"
import Monster2 from "../components/downloadMonster2"
import Monster3 from "../components/downloadMonster3"
import Monster4 from "../components/downloadMonster4"
import SEO from "../components/seo"

const Downloads = () => {
  return (
    <Layout>
      <h1>Free Printable Truck Drawings</h1>
      <p>Feel free to download some free pictures</p>
      <MainContainer>
        <ImageContainer>
          <Image>
            <Dodge />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/dodge_tmizxo.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <ChevLift />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/chevlift_hajpso.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <GMCTruck />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394746/Ty%20Watson/gmctruck_tunhmm.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <BigLift />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394747/Ty%20Watson/biglift_b8p6ge.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <Monster1 />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/monster1_mv9tjo.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <Monster2 />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/monster2_xyqitg.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <Monster3 />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394748/Ty%20Watson/monster3_h7lvt2.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
        <ImageContainer>
          <Image>
            <Monster4 />
          </Image>
          <Button
            onClick={() =>
              window.open(
                "https://res.cloudinary.com/dx4uolokd/image/upload/v1584394750/Ty%20Watson/monster4_oegkmx.pdf"
              )
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </Button>
        </ImageContainer>
      </MainContainer>
    </Layout>
  )
}

const Image = styled.div`
  width: 100%;
  transition: 0.5s;
`

const Button = styled.button`
  position: absolute;
  opacity: 0;
  background-color: #4caf50;
  border-radius: 15px;
  text-shadow: 3px 2px 1px gray;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
  transition: 0.5s;
`

const ImageContainer = styled.div`
  max-width: 400px;
  position: relative;
  border: 2px solid black;
  transition: 0.5s;

  &:hover ${Image} {
    opacity: 0.3;
  }

  &:hover ${Button} {
    opacity: 1;
  }
`

const MainContainer = styled.div`
  column-count: 2;
  column-fill: balance;
  column-gap: 15px;
  row-gap: 5px;
  -webkit-column-count: 2;
  -webkit-column-gap: 10px;
  -webkit-column-break-inside: avoid;
  -webkit-column-fill: balance;
  -moz-column-count: 2;
  -moz-column-gap: 10px;
  -moz-column-break-inside: avoid;
  break-after: avoid-column;
`

export default Downloads

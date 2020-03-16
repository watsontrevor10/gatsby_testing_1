import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import PrimaryButton from "../components/PrimaryButton"
import CustomImage from "../components/crusherImage"
import WackyImage from "../components/wackyImage"
import KennyImage from "../components/kennyImage"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Coloring Books for Truck Lovers</h1>
      <p>
        If you love big, powerful, beefy trucks and coloring, you are going to
        really enjoy Ty's coloring books. These hand-drawn beasts will provide
        you with hours of relaxation while dreaming about cruising in your
        favorite machine.
      </p>
      <h4 style={{ textAlign: "center" }}>Relax, color and enjoy!</h4>
      <div>
        <div
          style={{
            display: `flex`,
            flexDirection: `row-responsive`,
          }}
        >
          <MainContainer>
            <ImageContainer>
              <WackyImage />
            </ImageContainer>
            <ButtonContainer>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.amazon.com/Wild-Wacky-Semi-Trucks-Coloring-Book/dp/1690659416/ref=sr_1_1?keywords=ty+watson&qid=1583357258&s=books&sr=1-1",
                    "_blank"
                  )
                }
              >
                Order
              </Button>
            </ButtonContainer>
          </MainContainer>
          <MainContainer>
            <ImageContainer>
              <CustomImage />
            </ImageContainer>
            <ButtonContainer>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.amazon.com/Custom-Crusher-Coloring-Book-Books/dp/1548150916/ref=sr_1_2?keywords=ty+watson&qid=1583357258&s=books&sr=1-2",
                    "_blank"
                  )
                }
              >
                Order
              </Button>
            </ButtonContainer>
          </MainContainer>
          <MainContainer>
            <ImageContainer>
              <KennyImage />
            </ImageContainer>
            <ButtonContainer>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.amazon.com/Old-Kenny-Semi-Truck-Coloring-Book/dp/1724398199/ref=sr_1_3?keywords=ty+watson&qid=1583357258&s=books&sr=1-3",
                    "_blank"
                  )
                }
              >
                Order
              </Button>
            </ButtonContainer>
          </MainContainer>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "3em" }}>
        <Link to="/downloads">
          <PrimaryButton type="button">Printable Drawings</PrimaryButton>
        </Link>
      </div>
    </Layout>
  )
}

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  cursor: pointer;
`

const ImageContainer = styled.div`
  opacity: 1;
  transition: 0.5s;
`

const ButtonContainer = styled.div`
  top: 50%;
  left: 40%;
  position: absolute;
  opacity: 0;
  transition: 0.5s;
`

const MainContainer = styled.div`
  width: 600px;
  position: relative;
  margin: 5px;
  border: 3px solid black;
  transition: 0.5s;

  &:hover ${ButtonContainer} {
    opacity: 1;
  }

  &:hover ${ImageContainer} {
    opacity: 0.3;
  }
`

export default IndexPage

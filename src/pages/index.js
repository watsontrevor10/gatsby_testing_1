import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Button from "../components/PrimaryButton"
import CustomImage from "../components/crusherImage"
import WackyImage from "../components/wackyImage"
import KennyImage from "../components/kennyImage"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="adult coloring books for truck lovers"
        lang="eng"
      />
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
          <ImageContainer>
            <ButtonContainer>
              <Button
                type="button"
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
            <WackyImage />
          </ImageContainer>
          <ImageContainer>
            <ButtonContainer style={{}}>
              <Button
                type="button"
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
            <CustomImage />
          </ImageContainer>
          <ImageContainer>
            <ButtonContainer>
              <Button
                type="button"
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
            <KennyImage />
          </ImageContainer>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "3em" }}>
        <Link to="/downloads">
          <Button type="button">Printable Drawings</Button>
        </Link>
      </div>
    </Layout>
  )
}

const ImageContainer = styled.div`
  width: 600px;
  margin: 5px;
  border: 2px solid black;
`

const ButtonContainer = styled.div`
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default IndexPage

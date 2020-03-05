import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Button from "../components/PrimaryButton"
import OrderButton from "../components/OrderButton"
import SEO from "../components/seo"

const IndexPage = () => {
  const images = [
    {
      name: 'wildImage',
      url:
        "https://images-na.ssl-images-amazon.com/images/I/41XlOYqtfuL._SX404_BO1,204,203,200_.jpg",
      order:
        "https://www.amazon.com/Wild-Wacky-Semi-Trucks-Coloring-Book/dp/1690659416/ref=sr_1_1?keywords=ty+watson&qid=1583357258&s=books&sr=1-1",
    },
    {
      name: 'crusherImage',
      url:
        "https://images-na.ssl-images-amazon.com/images/I/61E0Oi4tqYL._SX398_BO1,204,203,200_.jpg",
      order:
        "https://www.amazon.com/Custom-Crusher-Coloring-Book-Books/dp/1548150916/ref=sr_1_2?keywords=ty+watson&qid=1583357258&s=books&sr=1-2",
    },
    {
      name: 'kennyImage',
      url:
        "https://images-na.ssl-images-amazon.com/images/I/41sBVOlWZeL._SX398_BO1,204,203,200_.jpg",
      order:
        "https://www.amazon.com/Old-Kenny-Semi-Truck-Coloring-Book/dp/1724398199/ref=sr_1_3?keywords=ty+watson&qid=1583357258&s=books&sr=1-3",
    },
  ]
  // const wildImage =
  //   "https://images-na.ssl-images-amazon.com/images/I/41XlOYqtfuL._SX404_BO1,204,203,200_.jpg"
  // const secondWildImage =
  //   "https://images-na.ssl-images-amazon.com/images/I/71OM8F8DDqL.jpg"
  // const crusherImage =
  //   "https://images-na.ssl-images-amazon.com/images/I/61E0Oi4tqYL._SX398_BO1,204,203,200_.jpg"
  // const kennyImage =
  //   "https://images-na.ssl-images-amazon.com/images/I/41sBVOlWZeL._SX398_BO1,204,203,200_.jpg"

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Coloring Books for Truck Lovers</h1>
      <div>
        <div
          style={{
            display: `flex`,
            flexDirection: `row-responsive`,
            justifyContent: "space-between",
          }}
        >
          <div style={{ margin: "6px" }}>
            <img
              src={images[0].url}
              alt="wild and watcky semi-trucks coloring book"
            />
            <OrderButtonAlign>
              <OrderButton
                type="button"
                onClick={() => window.open(`${images[0].order}`, "_blank")}
              >
                Order
              </OrderButton>
            </OrderButtonAlign>
          </div>
          <div style={{ margin: "6px" }}>
            <img src={images[1].url} alt="custom crusher coloring book" />
            <OrderButtonAlign>
              <OrderButton
                type="button"
                onClick={() => window.open(`${images[1].order}`, "_blank")}
              >
                Order
              </OrderButton>
            </OrderButtonAlign>
          </div>
          <div style={{ margin: "6px" }}>
            <img src={images[2].url} alt="old kenny semi-truck coloring book" />
            <OrderButtonAlign>
              <OrderButton
                type="button"
                onClick={() => window.open(`${images[2].order}`, "_blank")}
              >
                Order
              </OrderButton>
            </OrderButtonAlign>
          </div>
        </div>
        <div stye={{ display: "flex", justifyContent: "center" }}>
          <Link to="/downloads">
            <Button type="button" style={{ margin: "2em" }}>
              Printable Drawings
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

const OrderButtonAlign = styled.div`
  display: flex;
  justify-content: center;
`

export default IndexPage

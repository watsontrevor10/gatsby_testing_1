import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Coloring Books for Truck Lovers</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <div>
        <div 
          style={{
            display: `flex`, flexDirection: `horizontal`
          }}
        >
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41XlOYqtfuL._SX404_BO1,204,203,200_.jpg"
            alt="wild and watcky semi-trucks coloring book"
          />
          <button
            type='button'
          >
            Order
      </button>
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/61E0Oi4tqYL._SX398_BO1,204,203,200_.jpg"
            alt="custom crusher coloring book"
          />
          <button
            type='button'
          >
            Order
      </button>
        </div>
        <div>
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41sBVOlWZeL._SX398_BO1,204,203,200_.jpg"
            alt="old kenny semi-truck coloring book"
          />
          <button
            type='button'
          >
            Order
      </button>
        </div>
      </div>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Coloring Books for Truck Lovers</h1>
    <div >
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          margin: '3px',
        }}>
        <div
        >
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41XlOYqtfuL._SX404_BO1,204,203,200_.jpg"
            alt="wild and watcky semi-trucks coloring book"
          />
          <button
            type='button'
            onClick={() => window.open('https://www.amazon.com/Wild-Wacky-Semi-Trucks-Coloring-Book/dp/1690659416/ref=sr_1_1?keywords=ty+watson&qid=1583357258&s=books&sr=1-1', '_blank')}
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
            onClick={() => window.open('https://www.amazon.com/Custom-Crusher-Coloring-Book-Books/dp/1548150916/ref=sr_1_2?keywords=ty+watson&qid=1583357258&s=books&sr=1-2', '_blank')}
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
            onClick={() => window.open('https://www.amazon.com/Old-Kenny-Semi-Truck-Coloring-Book/dp/1724398199/ref=sr_1_3?keywords=ty+watson&qid=1583357258&s=books&sr=1-3', '_blank')}
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

import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Button from '../components/PrimaryButton'
import SEO from "../components/seo"

const IndexPage = () => {
  const [wildImage, setWildImage] = useState("https://images-na.ssl-images-amazon.com/images/I/41XlOYqtfuL._SX404_BO1,204,203,200_.jpg")
  const secondWildImage = "https://images-na.ssl-images-amazon.com/images/I/71OM8F8DDqL.jpg"
  const [crusherImage, setCrusherImage] = useState("https://images-na.ssl-images-amazon.com/images/I/61E0Oi4tqYL._SX398_BO1,204,203,200_.jpg")
  const [kennyImage, setKennyImage] = useState("https://images-na.ssl-images-amazon.com/images/I/41sBVOlWZeL._SX398_BO1,204,203,200_.jpg")

  
  return (

    <Layout>
      <SEO title="Home" />
      <h1>Coloring Books for Truck Lovers</h1>
      <div >
        <div
          style={{
            display: `flex`,
            flexDirection: `row-responsive`,
          }}>
          <div
          >
            <img
              src={wildImage}
              alt="wild and watcky semi-trucks coloring book"
            />
            <Button
              type='button'
              onClick={() => 
                window.open('https://www.amazon.com/Wild-Wacky-Semi-Trucks-Coloring-Book/dp/1690659416/ref=sr_1_1?keywords=ty+watson&qid=1583357258&s=books&sr=1-1', '_blank')
              }
            >
              Order
            </Button>
          </div>
          <div>
            <img
              src={crusherImage}
              alt="custom crusher coloring book"
            />
            <Button
              type='button'
              onClick={() => 
                window.open('https://www.amazon.com/Custom-Crusher-Coloring-Book-Books/dp/1548150916/ref=sr_1_2?keywords=ty+watson&qid=1583357258&s=books&sr=1-2', '_blank')
              }
            >
              Order
            </Button>
          </div>
          <div>
            <img
              src={kennyImage}
              alt="old kenny semi-truck coloring book"
            />
            <Button
              type='button'
              onClick={() => 
                window.open('https://www.amazon.com/Old-Kenny-Semi-Truck-Coloring-Book/dp/1724398199/ref=sr_1_3?keywords=ty+watson&qid=1583357258&s=books&sr=1-3', '_blank')
              }
            >
              Order
            </Button>
          </div>
        </div>
        <Link to='/downloads'>
          <Button 
            type='button'
            style={{ margin: '2em' }}
          >
            Printable Drawings
          </Button>
        </Link>
      </div>
    </Layout>
  )
}



export default IndexPage

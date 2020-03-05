import React from "react"
import { Link, graphql } from "gatsby"
import Image from 'gatsby-image'
import ty_profile from '../images/ty_profile.jpg'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="about" />
    <h1>Ty's Story</h1>
    <body>
      <div>
        <p>
          Ty Watson grew up in the potato fields of Blackfoot Idaho, and his brother-in-law is
          Jeff Anderson, the mastermind behind <a href='https://www.youtube.com/channel/UCVr-uUnTEFPhMMxmknr5LMw' targer="_blank">Jpaydirt</a>.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', }} >
        <p>
          Since he was a boy, Ty has always loved working on trucks and drawing them.
          after many yeras of drawing, Ty's sister (Jeff's wife) asked him to draw a few monster trucks for her two songs.
          Ty drew the trucks and his nephews loved them so much they begged for more!
          The idea of Custom Crusher coloring books was born.  Later, "Old Kenny" was brought into the picture, so-to-speak.
        </p>
        <img src={ty_profile} style={{ maxWidth: 180, marginRight: '1em', marginLeft: '2em' }} />
      </div>
      <p>
        Ty is a painter and drywall craftsman during the day.  But in his leisure time he finds peace through drawing
        trucks on all kinds.  Ty is hoping that through his drwaings, other will find peace of mind as they bring his
        drwaings to life through color.  If you enjoy "Old Kenny" coloring book and want to try Ty's coloring book
        of custom pickup trucks go tto Amazon.com and order a copy, and soon you will in coloring bliss.... again.
      </p>
    </body>
  </Layout >
)

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "ty_profile.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    } 
  }
`

export default SecondPage

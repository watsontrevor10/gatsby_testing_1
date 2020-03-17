import React from "react"
import { graphql } from "gatsby"
import AboutImage from "../components/aboutImage"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    <h1 style={{ margin: '1em' }}>Ty's Story</h1>
    <body>
      <div>
        <div
          style={{
            width: 300,
            maxHeight: 300,
            marginRight: "1em",
            marginLeft: "2em",
            float: "right",
          }}
        >
          <AboutImage />
        </div>

        <p>
          Hello, I’m Ty Q. Watson. I hope you love trucks like I do! I grew up
          in the potato fields of Blackfoot Idaho, and from the time I was a boy
          I loved looking at trucks, working on trucks, driving trucks and yes,
          drawing trucks. It was really my sister who got me thinking about
          coloring books. One day she was looking at some of my drawings and
          asked me to draw a few monster trucks for her two sons. So I did, and
          her boys loved them and begged for more! The idea for Ty Q. Coloring
          Books was born.
        </p>
      </div>
      <div>
        <p>
          Although I have had a long-time passion for drawing my trucks, turning
          them into coloring books is a recent development. I am a commercial
          painter and drywall craftsman by trade. But, my body is telling me
          that my days of painting and hanging drywall are numbered. My deepest
          desire is to help people like you, who find peace of mind and
          relaxation through coloring to enjoy these emotional benefits through
          my drawings. This is why I offer free downloadable drawings on this
          website. But, I also hope you will order a book or two.
        </p>
      </div>
      <p>
        Thank you for visiting my website. Let me know which of my trucks you
        like best and if there is a truck you would like me to draw. You can do
        this through my Facebook page TyQ Coloring Books.
      </p>
    </body>
  </Layout>
)

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "ty_profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SecondPage

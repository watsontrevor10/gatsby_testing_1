import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        background: `#3277a8`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "95%",
          padding: `1rem 1rem`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center'
        }}
      >
        <div
          style={{
            width: "200px",
            
          }}
        >
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div
          style={{
            position: 'relative',
            right: '3em'
          }}
        >
          <h1>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <div>
          <h3 >
            <Link to="/about" style={{ color: `white` }}>
              About
            </Link>
          </h3>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

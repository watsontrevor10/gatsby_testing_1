import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn&#39;t exist... the sadness.</p>
    <p>Go <Link to="/">Home</Link></p>
  </Layout>
)

export default NotFoundPage

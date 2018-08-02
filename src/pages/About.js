import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = ({ data: { site } }) => (
  <Layout>
    <h1>{site.siteMetadata.title}</h1>
    <p>{site.siteMetadata.description}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

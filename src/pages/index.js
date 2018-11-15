import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from 'components/layout'
import Home from 'components/home/home'

const IndexPage = ({ data: { page }, location }) => (
  <Layout location={location}>
    <Home data={page}/>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default IndexPage

export const indexQuery = graphql`
  query($local: String) {
    page: contentfulPage(
      title: { regex:"/home/i" },
      node_locale: { regex: $local }
    ) {
      hero {
        header
        subheader
        description {
          md: childMarkdownRemark {
            html
          }
        }
        image {
          fluid(maxWidth: 340) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`

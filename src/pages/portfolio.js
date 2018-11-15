import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from 'components/layout'
import Portfolio from 'components/portfolio/portfolio'

const PortfolioPage = ({ data: { page }, location }) => (
  <Layout location={location}>
    <Portfolio data={page}/>
  </Layout>
)

PortfolioPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default PortfolioPage

export const indexQuery = graphql`
  query($local: String) {
    page: contentfulPage(
      title: { regex:"/portfolio/i" },
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
          fluid(maxWidth: 1350) {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`

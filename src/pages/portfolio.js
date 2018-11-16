import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from 'components/layout'
import Portfolio from 'components/portfolio/portfolio'

const PortfolioPage = ({ data: { contentfulPage }, location }) => (
  <Layout location={location}>
    <Portfolio data={contentfulPage}/>
  </Layout>
)

PortfolioPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default PortfolioPage

export const indexQuery = graphql`
  query($local: String) {
    contentfulPage( title: { regex:"/portfolio/i" }, node_locale: { regex: $local } ) {
      ...PortfolioPage
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'
import Portfolio from 'components/portfolio/portfolio'

const PortfolioPage = ({ location }) => (
  <Layout location={location}>
    <Portfolio />
  </Layout>
)

PortfolioPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default PortfolioPage

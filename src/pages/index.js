import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'
import Home from 'components/Home'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Home />
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage

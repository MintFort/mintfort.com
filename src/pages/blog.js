import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'
import Blog from 'components/blog/blog'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Blog />
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage

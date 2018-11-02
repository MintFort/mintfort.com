import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'
import Blog from 'components/blog/blog'

const BlogPage = ({ location }) => (
  <Layout location={location}>
    <Blog />
  </Layout>
)

BlogPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default BlogPage

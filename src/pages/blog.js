import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Blog from '../components/blog'

const BlogPage = ({ location, data: { medium: { posts } } }) => (
  <Layout location={location}>
    <Blog posts={posts}/>
  </Layout>
)

BlogPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default BlogPage

export const pageQuery = graphql`
  {
    medium: allMediumPost(limit: 10, sort: { fields: [createdAt], order: DESC }) {
      posts: edges {
        node {
          ...MediumPost
        }
      }
    }
  }
`

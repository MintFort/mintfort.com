import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from "components/layout"
import { navHeight } from 'library/utils'

const Markdown = ({ location, data: { markdownRemark: md } }) => (
  <Layout location={location}>
    <div style={{ padding: 60, paddingTop: navHeight }}>
      <h1>{md.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    </div>
  </Layout>
)

Markdown.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default Markdown

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

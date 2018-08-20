import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import styled, { css } from 'styled-components'

import Layout from "components/layout"
import { navHeight, rem, phone } from 'library/utils'
import { Header } from 'library/index'

const Wrapper = styled.div`
  padding: calc(${navHeight} * 1.2) ${rem(60)} ${rem(60)};
  max-width: ${rem(1000)};

  ${phone(css`
    padding: calc(${navHeight} * 1.2) ${rem(20)} ${rem(20)};
  `)}
`

const Markdown = ({ location, data: { markdownRemark: md } }) => (
  <Layout location={location}>
    <Wrapper>
      <Header>{md.frontmatter.title}</Header>
      <div dangerouslySetInnerHTML={{ __html: md.html }} />
    </Wrapper>
  </Layout>
)

Markdown.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  }).isRequired
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

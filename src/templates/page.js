import React from "react"
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import styled, { css } from 'styled-components'

import Layout from "../components/layout"
import { rem, phone } from '../styles/utils'
import { Header } from '../styles'

const Wrapper = styled.div`
  padding: ${({ theme }) => `calc(${theme.navHeight} * 1.2) ${rem(60)} ${rem(60)}`};
  max-width: ${rem(1000)};

  ${phone(css`
    padding: ${({ theme }) => `calc(${theme.navHeight} * 1.2) ${rem(20)} ${rem(20)}`};
  `)}
`

const Markdown = ({ location, data: { page } }) => (
  <Layout location={location}>
    <Wrapper>
      <Header>{page.name}</Header>
      <div dangerouslySetInnerHTML={{ __html: page.content.md.html }} />
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

export const markdownQuery = graphql`
  query($slug: String!) {
    page: contentfulMarkdownPage(slug: { eq: $slug }) {
      name
      content {
        md: childMarkdownRemark {
          html
        }
      }
    }
  }
`

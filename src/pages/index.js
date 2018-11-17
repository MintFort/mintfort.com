import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Home from '../components/home'

const IndexPage = ({ data: { contentfulPage }, location }) => (
  <Layout location={location}>
    <Home data={contentfulPage}/>
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default IndexPage

export const indexQuery = graphql`
  query($local: String) {
    contentfulPage( title: { regex:"/home/i" }, node_locale: { regex: $local } ) {
      ...HomePage
    }
  }
`

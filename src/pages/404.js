import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import { navHeight } from '../library/utils'
import { Container } from '../library'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Container
      col
      centrate
      size={{ h: `calc(100vh - ${navHeight} * 2)` }}
    >
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default NotFoundPage

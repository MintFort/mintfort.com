import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/Hero'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Hero language={'en'}/>
  </Layout>
)

export default IndexPage

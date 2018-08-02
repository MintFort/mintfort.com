import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/Hero'

const IndexPage = () => (
  <Layout>
    <Hero language={'en'}/>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/about">Go to About</Link>
    </div>
  </Layout>
)

export default IndexPage

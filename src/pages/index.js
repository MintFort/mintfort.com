import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Mintfort</h1>
    <p>Be your bank</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

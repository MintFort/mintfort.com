import React from 'react'
import PropTypes from 'prop-types'

import Layout from 'components/layout'
import Download from 'components/download'

const DownloadPage = ({ location }) => (
  <Layout location={location}>
    <Download />
  </Layout>
)

DownloadPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default DownloadPage

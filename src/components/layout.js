import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/Header'
import SEO from 'components/SEO'
import { Context, addLang } from 'components/Context'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Context>
        {addLang(SEO, { path: location.pathname })}
        {addLang(Header, { siteTitle: data.site.siteMetadata.title })}
        <div>
          {children}
        </div>
      </Context>
      </>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.object.isRequired
}

export default Layout

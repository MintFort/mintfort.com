import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Headroom from 'react-headroom'

import Header from 'components/header'
import SEO from 'components/seo'
import { Context, addLang } from 'components/context'

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
        <Headroom>
          {addLang(Header, { siteTitle: data.site.siteMetadata.title })}
        </Headroom>
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

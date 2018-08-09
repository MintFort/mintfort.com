import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from "styled-components"
import { css } from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import SEO from 'components/seo'
import { Context, addLang } from 'components/context'

import { theme, hover, transitions } from 'library/utils'

injectGlobal`
  a {
    text-decoration: none;

    ${hover(css`
      color: ${theme.mint};
    `)}

    ${transitions('color 0.1s ease')};
  }
`

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
        <main>
          {children}
        </main>
        <Footer />
      </Context>
      </>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.object.isRequired
}

export default Layout

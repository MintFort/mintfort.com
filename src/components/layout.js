import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from "styled-components"
import { css } from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'

import SEO from 'utils/seo'
import { Context, addLang } from 'utils/context'

import { theme, hover, transitions } from 'library/utils'

injectGlobal`
  a {
    text-decoration: none;
    color: #1f1f1f;

    ${hover(css`
      color: ${theme.mint};
    `)}

    ${transitions('color 0.1s ease')};
  }

  main {
    overflow: hidden;
  }

  button, input {
    &:focus {
      outline: 0;
    }
  }
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Context location={location}>
        {addLang(SEO, { path: location.pathname })}
        {addLang(Header, { siteTitle: data.site.siteMetadata.title, location })}
        <main>
          {children}
        </main>
        <Footer path={location.pathname}/>
      </Context>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.object.isRequired
}

export default Layout

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

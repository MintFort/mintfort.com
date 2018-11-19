import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'

import SEO from '../utils/seo'
import { LanguageProvider } from '../utils/context/language'

import GlobalStyle, { theme } from '../styles/global'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={LAYOUT_DATA}
    render={data => (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <LanguageProvider location={location}>
            {<SEO pathname={location.pathname} />}
            {<Header siteTitle={data.site.siteMetadata.title} location={location} /> }
            <main>
              {children}
            </main>
            <Footer path={location.pathname}/>
          </LanguageProvider>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}

export default Layout

const LAYOUT_DATA = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

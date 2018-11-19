import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'

import SEO from '../utils/seo'
import { LanguageProvider, addLang } from '../utils/context/language'

import GlobalStyle, { theme } from '../styles/global'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <LanguageProvider location={location}>
            {addLang(SEO, { pathname: location.pathname })}
            {addLang(Header, { siteTitle: data.site.siteMetadata.title, location })}
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

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

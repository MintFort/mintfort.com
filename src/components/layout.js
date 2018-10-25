import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import SectionContact from 'components/sectionContact'

import SEO from 'utils/seo'
import { Context, addLang } from 'utils/context'

import GlobalStyle, { theme } from 'library/global'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Context location={location}>
            {addLang(SEO, { path: location.pathname })}
            {addLang(Header, { siteTitle: data.site.siteMetadata.title, location })}
            <main>
              {children}
            </main>
            <SectionContact />
            <Footer path={location.pathname}/>
          </Context>
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

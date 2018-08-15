import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from "styled-components"
import { css } from 'styled-components'
import { configureAnchors } from 'react-scrollable-anchor'

import Header from 'components/header'
import Footer from 'components/footer'
import SEO from 'components/seo'
import { Context, addLang } from 'components/context'

import { theme, hover, transitions } from 'library/utils'

import backImage from 'assets/svg/global_background-01.svg'

configureAnchors({
  offset: -60,
  scrollDuration: 800
})

injectGlobal`
  a {
    text-decoration: none;
    color: #1f1f1f;

    ${hover(css`
      color: ${theme.mint};
    `)}

    ${transitions('color 0.1s ease')};
  }

  button {
    &:focus {
      outline: 0;
    }
  }
`

const Main = styled.main`
  background-image: url(${backImage});
  background-repeat: repeat-y;
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
      <Context location={location}>
        {addLang(SEO, { path: location.pathname })}
        {addLang(Header, { siteTitle: data.site.siteMetadata.title, location })}
        <Main>
          {children}
        </Main>
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

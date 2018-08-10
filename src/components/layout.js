import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { injectGlobal } from "styled-components"
import { css } from 'styled-components'

import Header from 'components/header'
import Footer from 'components/footer'
import SEO from 'components/seo'
import { Context, addLang } from 'components/context'

import { theme, hover, transitions } from 'library/utils'

import backImage from 'assets/svg/global_background-01.svg'

injectGlobal`
  a {
    text-decoration: none;

    ${hover(css`
      color: ${theme.mint};
    `)}

    ${transitions('color 0.1s ease')};
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
      <Context>
        {addLang(SEO, { path: location.pathname })}
        {addLang(Header, { siteTitle: data.site.siteMetadata.title })}
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

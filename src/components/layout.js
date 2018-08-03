import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// Context creator
const { Provider, Consumer } = createContext()

import Header from './header'

import SEO from './SEO'

class Context extends Component {
  state = {
    language: 'en'
  }
  handleLanguage(){
    this.setState(state => ({
      language: state.language === 'en' ? 'zh' : 'en'
    }))
  }

  render(){
    return (
      <Provider value ={{
        language: this.state.language,
        onChangeLanguage: language => this.handleLanguage(language)
      }}>{this.props.children}</Provider>
    )
  }
}

export const addLang = (Component, props) => (
  <Consumer>{value => <Component {...props} {...value}/>}</Consumer>
)

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
      <SEO path={location.pathname}/>
        <Context>
          {addLang(Header, { siteTitle: data.site.siteMetadata.title })}
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0
            }}
          >
            {children}
          </div>
        </Context>
      </>
    )}
  />
)

export default Layout

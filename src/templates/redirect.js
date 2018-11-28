import React from 'react'
import browserLang from 'browser-lang'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

import { withLanguage } from '../utils/context/language'
import SEO from '../utils/seo'

export default class Redirect extends React.PureComponent {
  constructor(props) {
    super(props)
    const { languages, pathname } = props.pageContext

    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang') ||
        browserLang({ languages, fallback: languages[0] })

      localStorage.setItem('lang', lang)
      navigate(`/${lang}${pathname}`)
    }
  }
  render(){
    const { pathname } = this.props.pageContext

    return withLanguage(SEO)({ pathname })
  }
}

Redirect.propTypes = {
  pageContext: PropTypes.shape({
    languages: PropTypes.array,
    pathname: PropTypes.string
  }).isRequired
}

import React from 'react'
import browserLang from 'browser-lang'
import PropTypes from 'prop-types'

import { languages } from 'siteConfig'

import { addLang } from './context/language'
import SEO from './seo'

export default class Redirect extends React.PureComponent {
  constructor(props) {
    super(props)

    const { pathname } = props.location

    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang') || browserLang({ languages, fallback: languages[0] })

      localStorage.setItem('lang', lang)
      location.replace(`/${lang}${pathname}`)
    }
  }
  render = () => addLang(SEO, { path: this.props.location.pathname })
}

Redirect.propTypes = {
  location: PropTypes.object.isRequired
}

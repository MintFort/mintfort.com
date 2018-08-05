import React, { PureComponent } from 'react'
import browserLang from 'browser-lang'

import { languages } from 'siteConfig'

export default class Redirect extends PureComponent {
  constructor(props) {
    super(props)

    const { pathname } = props.location

    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('lang') || browserLang({ languages, fallback: languages[0] })

      localStorage.setItem('lang', lang)
      location.replace(`/${lang}${pathname}`)
    }
  }
  render = () => <></>
}

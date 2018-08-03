import React, { PureComponent } from 'react'

export default class Redirect extends PureComponent {
  constructor(props) {
    super(props)

    const { pathname } = props.location
    const lang = localStorage.getItem('lang')

    localStorage.setItem('lang', lang)
    location.replace(`/${lang}${pathname}`)
  }
  render = () => <></>
}

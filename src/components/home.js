import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { addLang } from 'components/Context'
import Hero from 'components/Hero'

import { hero } from 'data/home.yml'

class Home extends Component {
  state = {
    data: null
  }

  render(){
    const { language } = this.props

    return (
      <Hero
        title={hero[language].title}
        subTitle={hero[language].subTitle}
        body={hero[language].body}
        img={hero[language].img}
      />
    )
  }
}

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Home)

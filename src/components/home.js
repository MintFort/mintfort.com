import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { addLang } from 'components/context'
import Hero from 'components/hero'
import Block from 'components/block'

import { hero, imagine, crypto } from 'data/home.yml'

class Home extends Component {
  state = {
    data: null
  }

  render(){
    const { language } = this.props

    return (
      <>
      <Hero
        title={hero[language].title}
        subTitle={hero[language].subTitle}
        body={hero[language].body}
        img={hero[language].img}
      />
      <Block
        title={imagine[language].title}
        subTitle={imagine[language].subTitle}
        background= {imagine[language].background}
        color={{
          header: '#fff',
          paragraph: '#788cc7'
        }}
      />
      <Block
        title={crypto[language].title}
        subTitle={crypto[language].subTitle}
        background= {crypto[language].background}
        img= {crypto[language].img}
        color={{
          header: '#1f1f1f',
          paragraph: '#7b828a'
        }}
      />
      </>
    )
  }
}

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Home)

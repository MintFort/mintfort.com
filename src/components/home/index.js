import React from 'react'
import PropTypes from 'prop-types'

import { WindowWidthProvider } from '../../utils/context/windowWidth'

import Hero from '../../components/hero'
import { Imagine, Buy, Phone, Cards, Access, Boxes, Beta, News, Form } from './sections'

const Home = ({ data }) => {
  const [imagine, buy, access, portfolio, news] = data.sections

  return (
    <WindowWidthProvider>
      <Hero
        {...data.hero}
        buttonText={data.form.buttonText}
        id='home'
        scrollId='imagine'
      />
      <Imagine {...imagine} />
      <Buy {...buy} />
      <Phone images={buy.images} />
      <Cards {...data.cardsSection} />
      <Access {...access} />
      <Boxes {...data.boxSection} />
      <Beta {...portfolio} />
      <News {...news} />
      <Form {...data.form} />
    </WindowWidthProvider>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.object,
    boxSection: PropTypes.object,
    cardsSection: PropTypes.object,
    form: PropTypes.object,
    sections: PropTypes.array
  }).isRequired
}

export default Home

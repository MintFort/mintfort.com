import React from 'react'
import PropTypes from 'prop-types'

import { WindowWidthProvider } from '../../utils/context/windowWidth'

import Hero from '../shared/hero'
import { Imagine, Buy, Cards, Access, Boxes, Beta, News, Form } from './sections'

const Home = ({ data }) => {
  const [imagine, buy, access, portfolio, news] = data.sections
  const { hero, form, cardsSection, boxSection } = data

  return (
    <WindowWidthProvider>
      <Hero
        {...hero}
        buttonText={form.buttonText}
        id='home'
        scrollId='imagine'
      />
      <Imagine {...imagine} />
      <Buy {...buy} />
      <Cards {...cardsSection} />
      <Access {...access} />
      <Boxes {...boxSection} />
      <Beta {...portfolio} />
      <News {...news} />
      <Form {...form} />
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

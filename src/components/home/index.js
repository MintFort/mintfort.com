import React from 'react'
import PropTypes from 'prop-types'

import Hero from '../shared/hero'
import { Imagine, Buy, Cards, Access, Boxes, Beta, News, Form } from './sections'

const Home = ({ data }) => {
  const [imagine, buy, access, portfolio, news] = data.sections
  const { hero, form, cardsSection, boxSection } = data

  return (
    <>
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
    </>
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

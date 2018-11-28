import React from 'react'
import PropTypes from 'prop-types'

import Hero from '../shared/hero'
import { Download, OneStop, Exchanges } from './sections'

const Portfolio = ({ data }) => {
  const [download, shop] = data.sections

  return (
    <>
      <Hero
        {...data.hero}
        id='portfolio'
        scrollId='download'
      />
      <Download {...download} />
      <OneStop {...shop} />
      <Exchanges {...data.boxSection} />
    </>
  )
}

Portfolio.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.object,
    boxSection: PropTypes.object,
    sections: PropTypes.array
  })
}

export default Portfolio

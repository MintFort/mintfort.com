import React from 'react'
import PropTypes from 'prop-types'

import { addLang } from '../../utils/context/language'

import Hero from '../hero'
import SectionText from '../sectionText'

import SectionPortfolio from './sectionPortfolio'
import SectionDownload from './sectionDownload'
import SectionExchanges from './sectionExchanges'

const Portfolio = ({ data }) => {
  const [download, shop] = data.sections
  return (
  <>
    <Hero
      {...data.hero}
      id='portfolio'
      scrollId='download'
    />
    <div id={"download"}/>
    <SectionDownload
      {...download}
    />
    <SectionText
      {...shop}
      padding='6vh 0'
      color={{
        background: 'gray'
      }}
    />
    <SectionPortfolio
      images={shop.images}
    />
    <SectionExchanges
      {...data.boxSection}
    />
  </>
  )
}
Portfolio.propTypes = {
  data: PropTypes.shape({
    hero: PropTypes.object
  })
}

export default ({ data }) => addLang(Portfolio, { data })

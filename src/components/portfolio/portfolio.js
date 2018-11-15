import React from 'react'
import PropTypes from 'prop-types'

import { addLang } from 'utils/context/language'

import Hero from 'components/hero'
import SectionText from 'components/sectionText'

import Logos from './exchangeLogos'
import DividerPortfolioGif from './sectionPortfolio'
import SectionDownload from './sectionDownload'

import {
  // hero,
  download,
  shop,
  exchanges
} from 'data/download.yml'

const Portfolio = ({ data, language }) => (
  <>
    <Hero
      id='portfolio'
      title={data.hero.header}
      subTitle={data.hero.subheader}
      body={data.hero.description}
      img={data.hero.image}
      scrollId='download'
    />
    <div id={"download"}/>
    <SectionDownload
      title={download[language].title}
    />
    <SectionText
      title={shop[language].title}
      content={shop[language].subTitle}
      padding='6vh 0'
      color={{
        background: 'gray'
      }}
    />
    <DividerPortfolioGif
      img={shop[language].img}
    />
    <SectionText
      title={exchanges[language].title}
      content={<Logos logos={exchanges[language].logos}/>}
    />
  </>
)

Portfolio.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.shape({
    hero: PropTypes.object
  })
}

export default ({ data }) => addLang(Portfolio, { data })

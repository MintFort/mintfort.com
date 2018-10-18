import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { addLang } from 'utils/context'

import Hero from 'components/hero'
import SectionText from 'components/sectionText'

import Logos from './exchangeLogos'
import DividerPortfolioGif from './sectionPortfolio'
import SectionDownload from './sectionDownload'

import { hero, download, shop, exchanges } from 'data/download.yml'
import { theme } from 'library/utils'

const Portfolio = ({ language }) => (
  <StaticQuery
    query={query}
    render={({ img }) => (
      <>
        <Hero
          id='portfolio'
          title={hero[language].title}
          subTitle={hero[language].subTitle}
          body={hero[language].body}
          img={img}
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
            background: theme.gray
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
    )}
  />
)

Portfolio.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Portfolio)

const query = graphql`
  {
    img: file(relativePath: { regex: "/hero_download/"}) {
      childImageSharp {
        fluid(maxWidth: 1350) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

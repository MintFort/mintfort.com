import React from 'react'
import PropTypes from 'prop-types'
import { addLang } from 'components/context'
import ScrollableAnchor from 'react-scrollable-anchor'
import { graphql, StaticQuery } from 'gatsby'

import Hero from 'components/hero'
import Section from 'components/section'
import Logos from 'components/exchangeLogos'
import DividerPortfolioGif from 'components/sectionPortfolio'
import SectionDownload from 'components/sectionDownload'

import { hero, download, shop, exchanges } from 'data/download.yml'
import { theme } from 'library/utils'

const Download = ({ language }) => (
  <StaticQuery
    query={graphql`
      query {
        img: file(relativePath: { eq: "images/hero_download.png"}) {
          childImageSharp {
            fluid(maxWidth: 1350) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ img }) => (
      <>
        <Hero
          title={hero[language].title}
          subTitle={hero[language].subTitle}
          body={hero[language].body}
          img={img}
          scrollId='download'
        />
        <ScrollableAnchor id='download'>
          <SectionDownload title={download[language].title}/>
        </ScrollableAnchor>
        <Section
          title={shop[language].title}
          content={shop[language].subTitle}
          padding='6vh 0'
          color={{
            background: theme.gray
          }}
        />
        <DividerPortfolioGif img={shop[language].img}/>
        <Section
          title={exchanges[language].title}
          content={<Logos logos={exchanges[language].logos}/>}
        />
      </>
    )}
  />
)

Download.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Download)

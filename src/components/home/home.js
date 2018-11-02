import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { addLang } from 'utils/context/language'
import { WindowWidthProvider } from 'utils/context/windowWidth'

import Hero from 'components/hero'
import SectionText from 'components/sectionText'

import Subscribe from './formRegister'
import SectionGirl from './sectionGirl'
import SectionPhone from './sectionPhone'
import SectionCards from './sectionCards'
import SectionBoxes from './sectionBoxes'
import SectionBeta from './sectionBeta'
import SectionNews from './sectionNews'

import { hero, imagine, buy, access, cards, boxes, control, form, news } from 'data/home.yml'
import { hero as portfolio, shop } from 'data/download.yml'

const Home = ({ language }) => (
  <StaticQuery
    query={query}
    render={({ img }) => (
      <WindowWidthProvider>
        <Hero
          id='home'
          title={hero[language].title}
          subTitle={hero[language].subTitle}
          body={hero[language].body}
          img={img}
          button={form[language].button}
          scrollId='imagine'
        />
        <div id={"imagine"}/>
        <SectionText
          title={imagine[language].title}
          content={imagine[language].subTitle}
          padding={'14vh 0 4vh'}
        />
        <SectionGirl />
        <SectionText
          title={buy[language].title}
          content={buy[language].subTitle}
          padding={'8vh 0'}
          color={{
            background: 'gray'
          }}
        />
        <SectionPhone />
        <SectionCards
          cards={cards}
          language={language}
        />
        <SectionText
          title={access[language].title}
          content={access[language].subTitle}
        />
        <SectionBoxes
          data={boxes}
          language={language}
        />
        <SectionBeta
          title={portfolio[language].subTitle}
          content={portfolio[language].body}
          img={shop[language].img}
        />
        <SectionNews
          title={news[language].title}
          subtitle={news[language].subTitle}
        />
        <Subscribe
          title={control[language].title}
          subTitle={control[language].subTitle}
          formTitle={form[language].title}
          button={form[language].button}
        />
      </WindowWidthProvider>
    )}
  />
)

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Home)

const query = graphql`
  {
    img: file(relativePath: { regex: "/hero_home/"}) {
      childImageSharp {
        fluid(maxWidth: 340) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

import React from 'react'
import PropTypes from 'prop-types'

import { addLang } from 'utils/context/language'
import { WindowWidthProvider } from 'utils/context/windowWidth'

import Hero from 'components/hero'
import SectionText from 'components/sectionText'

import Subscribe from './formRegister'
import SectionGirl from './sectionGirl'
import SectionPhone from './sectionPhone'
import SectionCards from './sectionCards'
import SectionBoxes from './sectionBoxes'
// import SectionBeta from './sectionBeta'
import SectionNews from './sectionNews'

// import {
//   hero as portfolio,
//   shop
// } from 'data/download.yml'

const Home = ({
  data
  // language
}) => {
  // console.log(data)
  const [imagine, buy, access, news] = data.sections
  return (
    <WindowWidthProvider>
      <Hero {...data.hero}
        id='home'
        scrollId='imagine'
      />
      <div id={"imagine"}/>
      <SectionText
        {...imagine}
        padding={'14vh 0 4vh'}
      />
      <SectionGirl
        images={imagine.images}
      />
      <SectionText
        {...buy}
        padding={'8vh 0'}
        color={{
          background: 'gray'
        }}
      />
      <SectionPhone
        images={buy.images}
      />
      <SectionCards
        {...data.cardsSection}
      />
      <SectionText
        {...access}
      />
      <SectionBoxes
        {...data.boxSection}
      />
      {/* <SectionBeta
        title={portfolio[language].subTitle}
        content={portfolio[language].body}
        img={shop[language].img}
      /> */}
      <SectionNews
        {...news}
      />
      <Subscribe
        {...data.form}
      />
    </WindowWidthProvider>
  )
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.shape({
    hero: PropTypes.object // TODO: Populate this
  }).isRequired
}

export default ({ data }) => addLang(Home, { data })

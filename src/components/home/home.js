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
      <Hero
        id='home'
        title={data.hero.header}
        subTitle={data.hero.subheader}
        body={data.hero.description}
        img={data.hero.image}
        button={data.form.buttonText}
        scrollId='imagine'
      />
      <div id={"imagine"}/>
      <SectionText
        title={imagine.header}
        content={imagine.description}
        padding={'14vh 0 4vh'}
      />
      <SectionGirl
        images={imagine.images}
      />
      <SectionText
        title={buy.header}
        content={buy.description}
        padding={'8vh 0'}
        color={{
          background: 'gray'
        }}
      />
      <SectionPhone
        images={buy.images}
      />
      <SectionCards
        cards={data.cardsSection.cards}
      />
      <SectionText
        title={access.header}
        content={access.description}
      />
      <SectionBoxes
        data={data.boxSection.boxes}
      />
      {/* <SectionBeta
        title={portfolio[language].subTitle}
        content={portfolio[language].body}
        img={shop[language].img}
      /> */}
      <SectionNews
        title={news.header}
        subtitle={news.description}
      />
      <Subscribe
        title={data.form.sectionText.header}
        subTitle={data.form.sectionText.description}
        formTitle={data.form.header}
        button={data.form.buttonText}
      />
    </WindowWidthProvider>
  )
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
  data: PropTypes.shape({
    hero: PropTypes.object
  }).isRequired
}

export default ({ data }) => addLang(Home, { data })

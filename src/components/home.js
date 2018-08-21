import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import { addLang } from 'utils/context'

import Hero from 'components/hero'
import Section from 'components/section'
import { SectionCards, Card } from 'components/card'
import SectionBoxes from 'components/box'
import Subscribe from 'components/formRegister'
import SectionWatch from 'components/sectionWatch'
import SectionPhone from 'components/sectionPhone'

import { hero, imagine, buy, access, cards, boxes, control, form } from 'data/home.yml'
import { theme } from 'library/utils'

const Home = ({ language }) => (
  <>
    <Hero
      title={hero[language].title}
      subTitle={hero[language].subTitle}
      body={hero[language].body}
      img={hero[language].img}
      imgSize={320}
      scrollId='imagine'
      button={form[language].button}
    />
    <ScrollableAnchor id='imagine'>
      <div>
        <Section
          title={imagine[language].title}
          content={imagine[language].subTitle}
        />
      </div>
    </ScrollableAnchor>
    <SectionWatch />
    <Section
      title={buy[language].title}
      content={buy[language].subTitle}
      padding={'4vh 0'}
      color={{
        background: theme.gray
      }}
    />
    <SectionPhone />
    <SectionCards>
      {cards.map(card => (
        <Card
          key={card[language].id}
          title={card[language].title}
          img={card[language].img}
          card={card[language].id}
        />
      ))}
    </SectionCards>
    <Section
      title={access[language].title}
      content={access[language].subTitle}
      background= {access[language].background}
    />
    <SectionBoxes
      data={boxes}
      language={language}
    />
    <Section
      title={control[language].title}
      content={control[language].subTitle}
      padding={'20vh 0 0'}
    />
      <Subscribe
        title={form[language].title}
        button={form[language].button}
      />
  </>
)

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Home)

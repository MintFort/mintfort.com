import React from 'react'
import PropTypes from 'prop-types'
import ScrollableAnchor from 'react-scrollable-anchor'

import { addLang } from 'components/context'
import Hero from 'components/hero'
import Section from 'components/section'
import { SectionCards, Card } from 'components/card'
import SectionBoxes from 'components/box'

import { hero, imagine, crypto, access, cards, boxes, control } from 'data/home.yml'

const Home = ({ language }) => (
  <>
    <Hero
      title={hero[language].title}
      subTitle={hero[language].subTitle}
      body={hero[language].body}
      img={hero[language].img}
      scrollId='imagine'
    />
    <ScrollableAnchor id='imagine'>
      <div> {/* <- https://github.com/gabergg/react-scrollable-anchor/issues/45 */}
        <Section
          title={imagine[language].title}
          content={imagine[language].subTitle}
          background= {imagine[language].background}
          color={{
            header: '#fff',
            paragraph: '#788cc7'
          }}
        />
      </div>
    </ScrollableAnchor>
    <Section
      title={crypto[language].title}
      content={crypto[language].subTitle}
      background= {crypto[language].background}
      img= {crypto[language].img}
      color={{
        header: '#1f1f1f',
        paragraph: '#7b828a'
      }}
      padding={'8vh 0 4vh'}
    />
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
      color={{
        header: '#1f1f1f',
        paragraph: '#7b828a'
      }}
    />
    <SectionBoxes
      data={boxes}
      language={language}
    />
    <Section
      title={control[language].title}
      content={control[language].subTitle}
      color={{
        background: '#1b243f',
        header: '#fff',
        paragraph: '#788cc7'
      }}
    />
  </>
)

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Home)

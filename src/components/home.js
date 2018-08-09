import React from 'react'
import PropTypes from 'prop-types'

import { addLang } from 'components/context'
import Hero from 'components/hero'
import Section from 'components/section'
import { SectionCards, Card } from 'components/card'

import { hero, imagine, crypto, access, cards } from 'data/home.yml'

const Home = ({ language }) => (
  <>
    <Hero
      title={hero[language].title}
      subTitle={hero[language].subTitle}
      body={hero[language].body}
      img={hero[language].img}
    />
    <Section
      title={imagine[language].title}
      subTitle={imagine[language].subTitle}
      background= {imagine[language].background}
      color={{
        header: '#fff',
        paragraph: '#788cc7'
      }}
    />
    <Section
      title={crypto[language].title}
      subTitle={crypto[language].subTitle}
      background= {crypto[language].background}
      img= {crypto[language].img}
      color={{
        header: '#1f1f1f',
        paragraph: '#7b828a'
      }}
    />
    <SectionCards guide >
      {cards.map(card => (
        <Card
          key={card[language].id}
          title={card[language].title}
          img={card[language].img}
          id={card[language].id}
        />
      ))}
    </SectionCards>
    <Section
      title={access[language].title}
      subTitle={access[language].subTitle}
      background= {access[language].background}
      color={{
        header: '#1f1f1f',
        paragraph: '#7b828a'
      }}
    />
  </>
)

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Home)

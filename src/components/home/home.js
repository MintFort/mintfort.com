import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { addLang } from 'utils/context'

import Hero from 'components/hero'
import SectionText from 'components/sectionText'
import { SectionCards, Card } from 'components/card'
import SectionBoxes from 'components/box'

import Subscribe from './formRegister'
import SectionWatch from './sectionWatch'
import SectionPhone from './sectionPhone'

import { hero, imagine, buy, access, cards, boxes, control, form } from 'data/home.yml'
import { theme } from 'library/utils'

const Home = ({ language }) => (
  <StaticQuery
    query={query}
    render={({ img }) => (
      <>
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
          padding={'14vh 0 8vh'}
        />
        <SectionWatch />
        <SectionText
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
        <SectionText
          title={access[language].title}
          content={access[language].subTitle}
          background= {access[language].background}
        />
        <SectionBoxes
          data={boxes}
          language={language}
        />
        <SectionText
          title={control[language].title}
          content={control[language].subTitle}
          padding={'20vh 0 0'}
        />
        <Subscribe
          title={form[language].title}
          button={form[language].button}
        />
      </>
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
        fixed(width: 340) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

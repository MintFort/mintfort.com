import React from 'react'
import PropTypes from 'prop-types'
import { addLang } from 'components/context'

import Hero from 'components/hero'
import Icons from 'components/downloadIcons'
import Section from 'components/section'
import Logos from 'components/exchangeLogos'

import { hero, download, shop, exchanges } from 'data/download.yml'

const Download = ({ language }) => (
  <>
    <Hero
      title={hero[language].title}
      subTitle={hero[language].subTitle}
      body={hero[language].body}
      img={hero[language].img}
      imgSize={300}
    />
    <Section
      title={download[language].title}
      content={<Icons />}
      background= {download[language].background}
      color={{
        header: '#fff',
        paragraph: '#788cc7'
      }}
    />
    <Section
      title={shop[language].title}
      content={shop[language].subTitle}
      background= {shop[language].background}
      img= {shop[language].img}
      color={{
        header: '#1f1f1f',
        paragraph: '#7b828a'
      }}
    />
    <Section
      title={exchanges[language].title}
      background={exchanges[language].background}
      content={<Logos logos={exchanges[language].logos}/>}
      color={{
        header: '#1f1f1f',
        paragraph: '#788cc7'
      }}
    />
  </>
)

Download.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Download)

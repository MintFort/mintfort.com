import React from 'react'
import PropTypes from 'prop-types'

import { addLang } from 'components/context'
import Hero from 'components/hero'
import Icons from 'components/downloadIcons'
import Section from 'components/section'

import { hero, download } from 'data/download.yml'

const Download = ({ language }) => (
  <>
    <Hero
      title={hero[language].title}
      subTitle={hero[language].subTitle}
      body={hero[language].body}
      img={hero[language].img}
    />
    <Section
      title={download[language].title}
      subTitle={<Icons />}
      background= {download[language].background}
      color={{
        header: '#fff',
        paragraph: '#788cc7'
      }}
    />
  </>
)

Download.propTypes = {
  language: PropTypes.string.isRequired
}

export default () => addLang(Download)

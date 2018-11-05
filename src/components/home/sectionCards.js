import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Card } from 'components/card'

import { flex, phone } from 'library/utils'

const Wrapper = styled.section`
  ${flex};

  ${phone(css`
    flex-direction: column;
  `)}
`

const SectionCards = ({ cards, language }) => (
  <Wrapper>
    {cards.map(card => (
      <Card
        key={card[language].id}
        title={card[language].title}
        img={card[language].img}
        card={card[language].id}
      />
    ))}
  </Wrapper>
)

SectionCards.propTypes = {
  cards: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
}

export default SectionCards

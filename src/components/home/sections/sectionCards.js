import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Card } from '../../../components/card'
import { flex, phone } from '../../../styles/utils'

const Wrapper = styled.section`
  ${flex};

  ${phone(css`
    flex-direction: column;
  `)}
`

const SectionCards = ({ cards }) => (
  <Wrapper>
    {cards.map((card, id) => (
      <Card
        key={card.header}
        title={card.header}
        img={card.image}
        cardId={id}
      />
    ))}
  </Wrapper>
)

SectionCards.propTypes = {
  cards: PropTypes.array.isRequired
}

export default SectionCards

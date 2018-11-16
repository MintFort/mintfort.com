import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'
import Fade from 'react-reveal/Fade'

import { SubHeader } from 'library/index'
import { rem, flex, phone, mobile } from 'library/utils'

const back = {
  0: 'blue',
  1: 'gray',
  2: 'blue'
}

const Wrapper = styled.div`
  background: ${({ cardId, theme }) => theme[back[cardId]]};
  margin: ${rem(30)};
  max-width: 600px;
  box-shadow: 0px 6px 10px 0px rgba(27,36,63,0.4);
  flex: 1;

  ${mobile(css`
    margin: ${rem(10)} ${rem(4)};
  `)}

  ${phone(css`
    width: 90%;
    margin: ${rem(10)} ${rem(20)};
  `)}
`

const Text = styled.div`
  text-align: center;
  min-height: ${rem(130)};
  ${flex}

  h3 {
    ${mobile(css`
      font-size: ${rem(18)};
    `)}
  }
`

export const Card = ({ img, title, cardId }) => (
  <Wrapper cardId={cardId}>
    <Text>
      <Fade>
        <SubHeader
          style={{ margin: 0, padding: '0 30px' }}
          color={cardId === 1 ? 'blue' : 'whiteFont'}
        >
          {title}
        </SubHeader>
      </Fade>
    </Text>
    <Fade delay={200}>
      <GatsbyImg
        alt={title}
        title={title}
        fluid={img.fluid}
      />
    </Fade>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.object.isRequired,
  cardId: PropTypes.number.isRequired
}

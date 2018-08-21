import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { SubHeader, Img } from 'library/index'
import { rem, flex, phone, mobile, theme } from 'library/utils'

const back = {
  1: "#1b243f",
  2: "#f1f1f1",
  3: "#96c1e3"
}

const Wrapper = styled.div`
  background: ${({ card }) => card && back[card]};
  margin: ${rem(30)};
  max-width: 600px;
  box-shadow: 0px 6px 10px 0px rgba(27,36,63,0.4);

  ${mobile(css`
    margin: ${rem(10)};
  `)}
`

const Text = styled.div`
  text-align: center;
  min-height: ${rem(130)};
  ${flex}

  ${mobile(css`
    h3 {
      font-size: ${rem(20)};
    }
  `)}

  ${phone(css`
    h3 {
      font-size: ${rem(24)};
    }
  `)}
`

export const Card = ({ img, title, card }) => (
  <Wrapper card={card}>
    <Text>
      <Fade>
        <SubHeader
          style={{ margin: 0, padding: '0 30px' }}
          color={card === 2 ? theme.blue : '#fff'}
        >
          {title}
        </SubHeader>
      </Fade>
    </Text>
    <Fade delay={200}>
      <Img
        alt={title}
        src={require('../' + img)}
      />
    </Fade>
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  card: PropTypes.number.isRequired
}

export const SectionCards = styled.section`
  ${flex};

  ${phone(css`
    flex-direction: column;
  `)}
`

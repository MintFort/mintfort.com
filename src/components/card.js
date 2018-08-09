import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { SubHeader, Img } from 'library/index'
import { rem, flex, phone } from 'library/utils'

const back = {
  1: "#1b243f",
  2: "#f1f1f1",
  3: "#96c1e3"
}

const Wrapper = styled.div`
  background: ${({ id }) => id && back[id]};
  margin: ${rem(10)};
  box-shadow: 0px 6px 10px 0px rgba(27,36,63,0.4);
`

const Text = styled.div`
  text-align: center;
  min-height: ${rem(130)};
  ${flex}
`

export const Card = ({ img, title, id }) => (
  <Wrapper id={id}>
    <Text>
      <SubHeader
        style={{ margin: 0, padding: '0 20px' }}
        color={id === 2 ? '#1b2441' : '#fff'}
      >
        {title}
      </SubHeader>
    </Text>
    <Img src={require('../' + img)} />
  </Wrapper>
)

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  darkFont: PropTypes.bool
}

export const SectionCards = styled.section`
  ${flex};

  ${phone(css`
    flex-direction: column;
  `)}
`

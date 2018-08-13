import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Paragraph, Img, Container } from 'library/index'
import { rem, phone } from 'library/utils'

const back = {
  1: "#384774",
  2: "#4397d1",
  3: "#95c1e2",
  4: "#357cac",
  5: "#61a8d9",
  6: "#3b6ba1",
  7: "#192a5d",
  8: "#95c1e2"
}

const Wrapper = styled.div`
  background: ${({ id }) => id && back[id]};
  width: 25%;
  min-height: ${rem(260)};

  ${phone(css`
    width: 100%;
  `)}

  display: flex;
  flex-direction: column;
`

export const Box = ({ img, title, id }) => (
  <Wrapper id={id}>
    <Container style={{ flex: 3 }} centrate>
      <Img
        src={require('../' + img)}
        width={rem(60)}
        alt={title}
      />
    </Container>
    <Container style={{ flex: 1 }} centrate>
      <Paragraph color='#fff'>
        {title}
      </Paragraph>
    </Container>
  </Wrapper>
)

Box.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export const SectionBoxes = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;


  ${phone(css`
    flex-direction: column;
  `)}
`

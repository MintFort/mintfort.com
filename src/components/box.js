import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import MtSvgLines from 'react-mt-svg-lines'

import { addWindowWidth } from 'utils/context/windowWidth'
import { Paragraph, Container } from 'library/index'
import { rem, phone, mobile, screenBreak } from 'library/utils'

const border = color => `1px solid ${color}`

const Wrapper = styled.div`
  width: 25%;
  min-height: ${rem(240)};
  display: flex;
  flex-direction: column;

  ${({ id, theme }) => id && css`
    border-bottom: ${id.toString().match(/(1|2|3|4)/) && border(theme.gray)};
    border-right: ${id.toString().match(/(1|2|3|5|6|7)/) && border(theme.gray)};
  `}

  ${mobile(css`
    width: 50%;
    border: none;

    ${({ id, theme }) => id && css`
      border-bottom: ${id.toString().match(/(1|2|3|4|5|6)/) && border(theme.gray)};
      border-right: ${id.toString().match(/(1|3|5|7)/) && border(theme.gray)};
    `}
  `)}

  ${phone(css`
    border: none;
    width: 100%;
    min-height: auto;
    height: ${rem(140)};
    padding: 10px 0;

    ${({ id, theme }) => id && css`
      border-bottom: ${id.toString().match(/(1|2|3|4|5|6|7)/) && border(theme.gray)};
    `}
  `)}
`

const Icon = ({ component, width }) => {
  const name = component.replace(/ /g, "")
  const Component = require('components/SVG/icons')[name]

  if (!Component) {
    const { Placeholder } = require('components/SVG/icons')
    return <Placeholder width={width}/>
  }

  return <Component width={width}/>
}

Icon.propTypes = {
  component: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

Icon.defaultProps = {
  width: 80
}

const Box = ({ title, id, animate, windowWidth }) => (
  <Wrapper id={id}>
    <Container style={{ flex: 3 }} centrate>
      <MtSvgLines animate={ animate } duration={ 2000 }>
        <Icon
          component={title}
          width={windowWidth < screenBreak.phone ? 60 : 80}
        />
      </MtSvgLines>
    </Container>
    <Container style={{ flex: 1 }} centrate>
      <Fade delay={300}>
        <Paragraph color='blue'>
          {title}
        </Paragraph>
      </Fade>
    </Container>
  </Wrapper>
)

Box.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired,
  windowWidth: PropTypes.number
}

export default props => addWindowWidth(Box, ...props)

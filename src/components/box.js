import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import Waypoint from 'react-waypoint'
import MtSvgLines from 'react-mt-svg-lines'

import { Paragraph, Container } from 'library/index'
import { rem, phone, flex, mobile } from 'library/utils'

const Section = styled.section`
  padding: ${rem(30)};
  width: 100%;

  ${flex({ x: 'flex-start' })}
  flex-wrap: wrap;

  ${phone(css`
    flex-direction: column;
  `)}
`

const border = '1px solid #EDEDED'

const Wrapper = styled.div`
  width: 25%;
  min-height: ${rem(240)};
  display: flex;
  flex-direction: column;

  ${({ id }) => id && css`
    border-bottom: ${id.toString().match(/(1|2|3|4)/) && border};
    border-right: ${id.toString().match(/(1|2|3|5|6|7)/) && border};
  `}

  ${mobile(css`
    width: 50%;
    border: none;

    ${({ id }) => id && css`
      border-bottom: ${id.toString().match(/(1|2|5|6)/) && border};
      border-right: ${id.toString().match(/(1|3|5|7)/) && border};
    `}
  `)}

  ${phone(css`
    border: none;
    width: 100%;

    ${({ id }) => id && css`
      border-bottom: ${id.toString().match(/(1|2|3|4|5|6|7)/) && border};
    `}
  `)}
`

const Icon = ({ component }) => {
  const Component = require('components/SVG/icons')[component]
  return <Component />
}

Icon.propTypes = {
  component: PropTypes.string.isRequired
}

const Box = ({ component, title, id, animate }) => (
  <Wrapper id={id}>
    <Container style={{ flex: 3 }} centrate>
      <MtSvgLines animate={ animate } duration={ 2000 }>
        <Icon component={component}/>
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
  component: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  animate: PropTypes.bool.isRequired
}

class SectionBoxes extends React.Component {
  state = {
    animate: false
  }
  toogleShow = animate => {
    this.setState({ animate })
  }

  render(){
    const { data, language } = this.props
    const { animate } = this.state
    return (
      <>
        <Waypoint
          onEnter={() => this.toogleShow(true)}
        />
        <Section>
          {data.map(box => (
            <Box
              animate={animate}
              key={box[language].id}
              title={box[language].title}
              component={box[language].component}
              id={box[language].id}
            />
          ))}
        </Section>
      </>
    )
  }
}

SectionBoxes.propTypes = {
  data: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
}

export default SectionBoxes

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'
import Waypoint from 'react-waypoint'
import MtSvgLines from 'react-mt-svg-lines'

import { Paragraph, Container } from 'library/index'
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
  min-height: ${rem(240)};

  ${phone(css`
    width: 100%;
  `)}

  display: flex;
  flex-direction: column;
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
    <Waypoint />
    <Container style={{ flex: 3 }} centrate>
      <MtSvgLines animate={ animate } duration={ 3000 }>
        <Icon component={component}/>
      </MtSvgLines>
    </Container>
    <Container style={{ flex: 1 }} centrate>
      <Fade delay={300}>
        <Paragraph color='#fff'>
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

const Boxes = ({ animate, data, language }) => (
  <>
  {data.map(box => (
    <Box
      animate={animate}
      key={box[language].id}
      title={box[language].title}
      component={box[language].component}
      id={box[language].id}
    />
  ))}
  </>
)

const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;


  ${phone(css`
    flex-direction: column;
  `)}
`

class SectionBoxes extends React.Component {
  state = {
    animate: false
  }
  toogleShow = animate => {
    this.setState({ animate })
  }

  render(){
    return (
      <Section>
        <Waypoint
          onEnter={() => this.toogleShow(true)}
        />
        <Boxes
          animate={this.state.animate}
          data={this.props.data}
          language={this.props.language}
        />
      </Section>
    )
  }
}

SectionBoxes.propTypes = {
  data: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired
}

export default SectionBoxes

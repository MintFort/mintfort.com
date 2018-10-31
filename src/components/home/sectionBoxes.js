import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Waypoint from 'react-waypoint'

import { rem, phone, flex } from 'library/utils'

import Box from 'components/box'

const Section = styled.section`
  padding: ${rem(30)};
  width: 100%;

  ${flex({ x: 'flex-start' })}
  flex-wrap: wrap;

  ${phone(css`
    padding: 0;
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
              key={box[language].id}
              animate={animate}
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

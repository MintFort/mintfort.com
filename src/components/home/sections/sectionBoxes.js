import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Waypoint from 'react-waypoint'

import { rem, phone, flex } from '../../../styles/utils'
import Box from '../../box'

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
    const { boxes } = this.props
    const { animate } = this.state

    return (
      <>
        <Waypoint
          onEnter={() => this.toogleShow(true)}
        />
        <Section>
          {boxes.map((box, id) => (
            <Box
              key={box.name}
              animate={animate}
              id={id + 1}
              {...box}
            />
          ))}
        </Section>
      </>
    )
  }
}

SectionBoxes.propTypes = {
  boxes: PropTypes.array.isRequired
}

export default SectionBoxes

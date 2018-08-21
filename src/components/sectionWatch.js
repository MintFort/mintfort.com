import React from 'react'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { flex, phone } from 'library/utils'
import { Img } from 'library/index'

import DividerStart from 'components/backgrounds/start'

const Wrapper = styled.div`
  position: relative;
  height: 480px;
  overflow: hidden;
  width: 100%;
`

const ImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  ${flex}

  ${phone(css`
    flex-direction: column;
    width: 100%;
  `)}
`

const SectionWatch = () => (
  <Wrapper>
    <ImageWrapper>
      <Fade>
        <Img
          width={300}
          src={require('../assets/images/watch_animation.gif')}
          alt="Watch image"
          draggable='false'
        />
      </Fade>
    </ImageWrapper>
    <DividerStart />
  </Wrapper>
)

export default SectionWatch

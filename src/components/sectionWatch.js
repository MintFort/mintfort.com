import React from 'react'
import styled, { css } from 'styled-components'

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
      <Img
        width={300}
        src={require('../assets/images/watch_animation.gif')}
        alt="Watch image"
        draggable='false'
      />
    </ImageWrapper>
    <DividerStart style={{ zIndex: '-1' }}/>
  </Wrapper>
)

export default SectionWatch

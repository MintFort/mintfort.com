import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import DividerEnd from 'components/backgrounds/end'
import { flex, phone, mobile, rem } from 'library/utils'
import { Img } from 'library/index'

const Wrapper = styled.div`
  position: relative;
  background: #F2F2F2;
  overflow: hidden;
  width: 100%;

  ${phone(css`
    padding: 0 ${rem(10)}
  `)}

  ${flex}
`

const ImageWrapper = styled.div`
  width: 50%;
  z-index: 1;

  ${flex}

  ${mobile(css`
    width: 70%;
  `)}

  ${phone(css`
    width: 100%;
  `)}

  transition: all .2s;
`

const Divider = ({ img }) => (
  <Wrapper>
    <DividerEnd />
    <ImageWrapper>
      <Fade>
        <Img
          size={50}
          alt='portfolio'
          src={require('../' + img)}
        />
      </Fade>
    </ImageWrapper>
  </Wrapper>
)

Divider.propTypes = {
  img: PropTypes.string.isRequired
}

export default Divider

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import DividerEnd from '../../components/backgrounds/end'
import { flex, phone, mobile, rem } from '../../library/utils'

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

const SectionPortfolio = ({ images }) => (
  <Wrapper>
    <DividerEnd />
    <ImageWrapper>
      <GatsbyImg
        style={{ width: "100%", maxWidth: 825 }}
        alt='Portfolio tracker'
        title='Portfolio tracker'
        fluid={images[0].fluid}
      />
    </ImageWrapper>
  </Wrapper>
)

SectionPortfolio.propTypes = {
  images: PropTypes.array.isRequired
}

export default SectionPortfolio

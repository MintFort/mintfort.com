import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import SectionText from '../../shared/sectionText'
import DividerEnd from '../../backgrounds/end'

import { flex, phone, mobile, rem } from '../../../styles/utils'

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.gray};
  overflow: hidden;
  width: 100%;
  overflow-x: hidden;:

  padding-bottom: ${rem(20)};

  ${phone(css`
    padding: ${rem(20)} ${rem(60)} ${rem(60)}
  `)}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: ${rem(20)} 0;

  ${flex}

  ${phone(css`
    padding: 0;
  `)}
`

const PhoneWrapper = styled.div`
  width: ${rem(600)};

  ${mobile(css`
    max-width: ${rem(500)};
  `)}

  ${phone(css`
    max-width: ${rem(400)};
  `)}

  @media (max-width: ${460 / 16}em) {
    max-width: ${rem(280)};
  }
`

const Image = styled(GatsbyImg).attrs({
  alt: 'Mintfort Crypto Phone',
  title: 'Mintfort Crypto Phone'
})`
  max-width: 675px;

  &.mobile {
    display: none;
  }

  ${phone(css`
    &.mobile {
      display: block
    }

    &.desktop {
      display: none;
    }
  `)}
`

const Phone = ({ images } ) => (
  <PhoneWrapper>
    <Image
      className='desktop'
      fluid={images[0].fluid}
    />
    <Image
      className='mobile'
      fluid={images[1].fluid}
    />
  </PhoneWrapper>
)

Phone.propTypes = {
  images: PropTypes.array.isRequired
}

const SectionBuy = ({ header, description, images }) => (
  <>
    <SectionText
      header={header}
      description={description}
      padding={'8vh 0'}
      color={{
        background: 'gray'
      }}
    />
    <Wrapper>
      <DividerEnd />
      <ImageWrapper>
        <Fade>
          <Phone images={images} />
        </Fade>
      </ImageWrapper>
    </Wrapper>
  </>
)

SectionBuy.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired
}

export default SectionBuy

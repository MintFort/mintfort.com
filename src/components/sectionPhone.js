import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'

import { flex, phone, rem } from 'library/utils'

const Wrapper = styled.div`
  position: relative;
  background: #F2F2F2;
  overflow: hidden;
  width: 100%;
  overflow-x: hidden;:

  padding-bottom: ${rem(20)};

  ${phone(css`
    padding: ${rem(60)}
  `)}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;

  ${flex}
`

const PhoneWrapper = styled.div`
  width: ${rem(657)};
`


const Background = ({ image }) => (
  <GatsbyImg
    imgStyle={{
      objectPosition: 'top'
    }}
    style={{
      position: 'absolute',
      bottom: 0,
      left: -1,
      width: '101%',
      height: '100%',
      zIndex: 0
    }}
    alt='Background phone'
    fluid={image.childImageSharp.fluid}
  />
)

Background.propTypes = {
  image: PropTypes.object.isRequired
}

const Phone = ({ image }) => (
  <PhoneWrapper>
    <GatsbyImg
      style={{
        width: "100%"
      }}
      alt='Mintfort Crypto Phone'
      title='Mintfort Crypto Phone'
      fluid={image.childImageSharp.fluid}
    />
  </PhoneWrapper>
)

Phone.propTypes = {
  image: PropTypes.object.isRequired
}

const SectionPhone = () => (
  <StaticQuery
    query={graphql`
      query {
        back: file(relativePath: { eq: "images/phone_section.png"}) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        phone: file(relativePath: { eq: "images/crypto_phone.png"}) {
          childImageSharp {
            fluid(maxWidth: 657) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ back, phone }) => (
      <Wrapper>
        <Background image={back}/>
        <ImageWrapper>
          <Phone image={phone}/>
        </ImageWrapper>
      </Wrapper>
    )}
  />
)

export default SectionPhone

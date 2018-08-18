import React from 'react'
import GatsbyImg from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'

import { flex, phone } from 'library/utils'
import { Img } from 'library/index'

const Background = () => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/watch_girl_section.png"}) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={({ image }) => (
      <GatsbyImg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          zIndex: "-1"
        }}
        alt='Background watch'
        fluid={image.childImageSharp.fluid}
      />
    )}
  />
)

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
    <Background />
  </Wrapper>
)

export default SectionWatch

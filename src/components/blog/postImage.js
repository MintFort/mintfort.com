import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { rem, phone } from 'library/utils'


const ImageWrapper = styled.div`
  margin: 0 ${rem(20)};
  width: ${rem(220)};
  height: ${rem(140)};
  box-shadow: ${({ theme }) => theme.shadow};

  ${phone(css`
    width: 100%;
    margin: 0 0 ${rem(30)};
  `)}
`

const PostImage = ({ image, url, title }) => (
  <ImageWrapper>
    <a href={url}>
      <GatsbyImg
        style={{ height: '100%' }}
        fluid={image.childImageSharp.fluid}
        alt={title}
        title={title}
      />
    </a>
  </ImageWrapper>
)

PostImage.propTypes = {
  image: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default PostImage

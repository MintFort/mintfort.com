import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { flex, rem, phone, mobile, hover } from '../../styles/utils'
import { SubHeader, Paragraph } from '../../styles'

import Author from './author'
import PostImage from './postImage'

const CardWrapper = styled.article`
  ${flex}
  border-bottom: 1px solid lightgray;
  padding: ${rem(32)};
  margin-bottom: ${rem(32)};
  box-shadow: rgba(27, 37, 64, 0.2) 0px 4px 4px 0px;

  ${hover(css`
    box-shadow: rgba(27, 37, 64, 0.5) 0px 4px 4px 0px;
  `)}

  transition: box-shadow .3s ease;

  .content {
    flex: 1;
  }

  ${mobile(css`
    padding: ${rem(24)} ${rem(18)};
  `)}

  ${phone(css`
    flex-direction: column;

    .content {
      order: 2;
    }
  `)}
`

const Anchor = styled.div`
  cursor: pointer;
`

const ImagePosition = styled.div`
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

const Image = ({ data }) => data.image && data.image.childImageSharp && (
  <PostImage
    title={data.title}
    image={data.image}
    url={data.url}
  />
)

Image.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.object
  }).isRequired
}

const Card = ({ data }) => (
  <CardWrapper>
    <div className='content'>
      <Anchor onClick={() => window.location.href=data.url}>
        <SubHeader
          size={32}
          weight='bold'
          style={{ margin: '0px 0px 20px' }}
        >
          {data.title}
        </SubHeader>
        <ImagePosition className='mobile'>
          <Image data={data} />
        </ImagePosition>
        <Paragraph
          size={15}
          color='lightFont'
        >
          {data.subtitle}
        </Paragraph>
      </Anchor>
      <Author
        author={data.author}
        createdAt={data.createdAt}
      />
    </div>
    <ImagePosition className='desktop'>
      <Image data={data} />
    </ImagePosition>
  </CardWrapper>
)

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    createdAt: PropTypes.string,
    image: PropTypes.object,
    author: PropTypes.object
  }).isRequired
}

export default Card

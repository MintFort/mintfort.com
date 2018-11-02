import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { addWindowWidth } from 'utils/context/windowWidth'
import { screenBreak } from 'library/utils'

import { flex, rem, phone, mobile, hover } from 'library/utils'
import { SubHeader, Paragraph } from 'library/index'

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

const Card = ({ data, windowWidth: winW }) => (
  <CardWrapper>
    <div className='content'>
      <Anchor onClick={() => location.href=data.url}>
        <SubHeader
          size={32}
          weight='bold'
          style={{ margin: '0px 0px 20px' }}
        >
          {data.title}
        </SubHeader>
        {winW <= screenBreak.phone && <Image data={data} />}
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
    {winW > screenBreak.phone && <Image data={data} />}
  </CardWrapper>
)

Card.propTypes = {
  windowWidth: PropTypes.number,
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    createdAt: PropTypes.string,
    image: PropTypes.object,
    author: PropTypes.object
  }).isRequired
}

export default props => addWindowWidth(Card, ...props)
